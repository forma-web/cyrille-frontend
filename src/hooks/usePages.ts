import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TChapterData } from '@/types/reader';

export type TUsePages = {
  isLoading: boolean;
  currentChapter: TChapterData | null;
};

const usePages = ({ isLoading, currentChapter }: TUsePages) => {
  const [widthPage, setWidthPage] = useState(0);
  const [gapPage, setGapPage] = useState(0);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [currentPage, setCurrentPages] = useState<number | null>(null);
  const readerRef = useRef<HTMLDivElement>(null);

  const changeProgress = useCallback(
    (progress: number) => {
      if (totalPages === null) {
        return;
      }

      setCurrentPages(() => Math.floor((totalPages * progress) / 100) + 1);
    },
    [totalPages],
  );

  useEffect(() => {
    setCurrentPages(() => 1);
  }, [totalPages]);

  const readerStyles = useMemo(
    () => ({
      left: `-${(widthPage + gapPage) * (currentPage! - 1)}px`,
      columnWidth: widthPage > 0 ? `${widthPage}px` : 'auto',
    }),
    [currentPage, gapPage, widthPage],
  );

  const calcPages = useCallback(() => {
    const readerContent = readerRef.current;

    if (!readerContent) {
      return;
    }

    const { scrollWidth, clientWidth } = readerContent;
    const styles = getComputedStyle(readerContent);

    const columnGap = parseFloat(styles.columnGap);

    const total = Math.ceil(
      (scrollWidth + columnGap) / (clientWidth + columnGap),
    );

    setTotalPages(() => total);
    setWidthPage(() => clientWidth);
    setGapPage(() => columnGap);
  }, [readerRef, setTotalPages]);

  useEffect(() => {
    const readerContent = readerRef.current;

    if (!readerContent) {
      return;
    }

    const ro = new ResizeObserver(calcPages);
    readerContent.childNodes.forEach((element) => {
      ro.observe(element as Element);
    });

    const mo = new MutationObserver(calcPages);
    mo.observe(readerContent, {
      childList: true,
      subtree: true,
    });

    return () => {
      ro.disconnect();
      mo.disconnect();
    };
  }, [calcPages, readerRef, isLoading]);

  const nextPage = useCallback(() => {
    if (
      currentChapter === null ||
      totalPages === null ||
      currentPage === null
    ) {
      return;
    }

    if (currentPage < totalPages) {
      setCurrentPages((prevProgress) => prevProgress! + 1);
      return;
    }
  }, [currentChapter, currentPage, totalPages]);

  const prevPage = useCallback(() => {
    if (
      currentChapter === null ||
      totalPages === null ||
      currentPage === null
    ) {
      return;
    }

    if (currentPage > 1) {
      setCurrentPages((prevProgress) => prevProgress! - 1);
      return;
    }
  }, [currentChapter, currentPage, totalPages]);

  const changePage = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetX } = e.nativeEvent;
    const { clientWidth } = e.currentTarget;

    if (currentPage === null) {
      return;
    }

    if (offsetX < clientWidth / 4) {
      prevPage();
    }

    if (offsetX > clientWidth - clientWidth / 4) {
      nextPage();
    }
  };

  return {
    totalPages,
    currentPage,
    readerStyles,
    changePage,
    changeProgress,
    prevPage,
    nextPage,
    readerRef,
  };
};

export default usePages;
