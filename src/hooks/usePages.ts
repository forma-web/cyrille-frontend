import { useEffect, useMemo, useRef, useState } from 'react';

const usePages = () => {
  const readerContentRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [widthPage, setWidthPage] = useState(0);

  const readerPosition = useMemo(
    () => `-${widthPage * (currentPage - 1)}px`,
    [currentPage, widthPage],
  );

  const calcPages = () => {
    const readerContent = readerContentRef.current;

    if (readerContent) {
      const { scrollWidth, clientWidth } = readerContent;
      setTotalPages(() => Math.ceil(scrollWidth / clientWidth));
      setWidthPage(() => clientWidth);
    }
  };

  useEffect(() => {
    const readerContent = readerContentRef.current;

    if (!readerContent) {
      return;
    }

    const ro = new ResizeObserver(() => {
      calcPages();
    });
    ro.observe(readerContent);

    return () => {
      ro.unobserve(readerContent);
    };
  }, [readerContentRef]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const changePage = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetX } = e.nativeEvent;
    const { clientWidth } = e.currentTarget;

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
    readerRef: readerContentRef,
    readerPosition,
    currentPage,
    totalPages,
    changePage,
  };
};

export default usePages;
