import { useCallback, useEffect, useMemo, useState } from 'react';
import { TChapterData } from '@/types/reader';

export type TUsePages = {
  readerRef: React.RefObject<HTMLDivElement>;
  isLoading: boolean;
  progress: number | null;
  currentChapter: TChapterData | null;
};

const usePages = ({
  readerRef,
  isLoading,
  progress,
  currentChapter,
}: TUsePages) => {
  const [widthPage, setWidthPage] = useState(0);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const currentPage = useMemo(() => {
    if (totalPages === null || progress === null || currentChapter === null) {
      return null;
    }

    const [start, end] = currentChapter.progress;

    const step = (end - start) / (totalPages - 1);
    const value = Math.floor((progress - start) / step) + 1;

    return Math.max(1, Math.min(value, totalPages));
  }, [totalPages, progress, currentChapter]);

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
    const total = Math.ceil(scrollWidth / clientWidth);

    setTotalPages(() => total);
    setWidthPage(() => clientWidth);
  }, [readerRef, setTotalPages]);

  useEffect(() => {
    const readerContent = readerRef.current;

    if (!readerContent) {
      return;
    }

    const ro = new ResizeObserver(calcPages);
    ro.observe(readerContent);

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

  // const changePage = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const { offsetX } = e.nativeEvent;
  //   const { clientWidth } = e.currentTarget;

  //   if (currentPage === null) {
  //     return;
  //   }

  //   if (offsetX - widthPage * (currentPage - 1) < clientWidth / 4) {
  //     prevPage();
  //   }

  //   if (
  //     offsetX - widthPage * (currentPage - 1) >
  //     clientWidth - clientWidth / 4
  //   ) {
  //     nextPage();
  //   }
  // };

  return {
    totalPages,
    currentPage,
    readerPosition,
    // changePage,
  };
};

export default usePages;
