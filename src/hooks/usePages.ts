import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TChapterData } from '@/types/reader';

export type TUsePages = {
  isLoading: boolean;
  currentChapter: TChapterData | null;
};

const usePages = ({ isLoading, currentChapter }: TUsePages) => {
  const [widthPage, setWidthPage] = useState(0);
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

  const readerPosition = useMemo(
    () => `-${widthPage * (currentPage! - 1)}px`,
    [currentPage, widthPage],
  );

  const calcPages = useCallback(() => {
    const readerContent = readerRef.current;

    if (!readerContent) {
      return;
    }

    const { scrollWidth } = readerContent;
    const styles = getComputedStyle(readerContent);

    const columnGap = parseFloat(styles.columnGap);
    const columnWidth = parseFloat(styles.columnWidth);

    const total = Math.ceil((scrollWidth + columnGap) / columnWidth);

    setTotalPages(() => total);
    setWidthPage(() => columnWidth);
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
    readerPosition,
    changePage,
    changeProgress,
    prevPage,
    nextPage,
    readerRef,
  };
};

export default usePages;
