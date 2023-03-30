import { useCallback, useEffect, useMemo, useState } from 'react';
import { TUsePages } from '@/types/reader';

const usePages = ({
  readerRef,
  currentPage,
  isLoading,
  setCurrentPage,
  setTotalPages,
  nextPage,
  prevPage,
}: TUsePages) => {
  const [widthPage, setWidthPage] = useState(0);

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

    setCurrentPage((prev) => {
      if (prev === -1) {
        return total;
      }
      return prev;
    });
    setTotalPages(() => total);
    setWidthPage(() => clientWidth);
  }, [readerRef, setCurrentPage, setTotalPages]);

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
    readerPosition,
    changePage,
  };
};

export default usePages;
