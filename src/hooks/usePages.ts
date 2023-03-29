import { useCallback, useEffect, useMemo, useState } from 'react';

type TUsePages = {
  readerRef: React.RefObject<HTMLDivElement>;
  currentPage: number | null;
  totalPages: number | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<number | null>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number | null>>;
};

const usePages = ({
  readerRef,
  currentPage,
  totalPages,
  setCurrentPage,
  setTotalPages,
}: TUsePages) => {
  const [widthPage, setWidthPage] = useState(0);

  const readerPosition = useMemo(
    () => `-${widthPage * (currentPage ?? 1 - 1)}px`,
    [currentPage, widthPage],
  );

  const calcPages = useCallback(() => {
    const readerContent = readerRef.current;

    if (readerContent) {
      const { scrollWidth, clientWidth } = readerContent;
      setTotalPages(() => Math.ceil(scrollWidth / clientWidth));
      setWidthPage(() => clientWidth);
    }
  }, [readerRef, setTotalPages]);

  useEffect(() => {
    const readerContent = readerRef.current;

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
  }, [calcPages, readerRef]);

  const nextPage = () => {
    if (currentPage! < totalPages!) {
      setCurrentPage((prev) => prev ?? 0 + 1);
    }
  };

  const prevPage = () => {
    if (currentPage! > 1) {
      setCurrentPage((prev) => prev ?? 1 - 1);
    }
  };

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
