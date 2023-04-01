import { useCallback, useEffect, useMemo, useState } from 'react';
import { TChapterData } from '@/types/reader';

export type TUsePages = {
  readerRef: React.RefObject<HTMLDivElement>;
  isLoading: boolean;
  currentChapter: TChapterData | null;
};

const usePages = ({ readerRef, isLoading, currentChapter }: TUsePages) => {
  const [widthPage, setWidthPage] = useState(0);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [currentPage, setCurrentPages] = useState<number | null>(null);

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

    const { scrollWidth, clientWidth } = readerContent;
    const total = Math.floor(scrollWidth / clientWidth);

    setTotalPages(() => total);
    setWidthPage(() => clientWidth);
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

    if (offsetX - widthPage * (currentPage - 1) < clientWidth / 4) {
      prevPage();
    }

    if (
      offsetX - widthPage * (currentPage - 1) >
      clientWidth - clientWidth / 4
    ) {
      nextPage();
    }
  };

  return {
    totalPages,
    currentPage,
    readerPosition,
    changePage,
    changeProgress,
  };
};

export default usePages;
