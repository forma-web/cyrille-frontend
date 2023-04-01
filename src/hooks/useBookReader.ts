import usePages from './usePages';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useChapterContent from './useChapterContent';
import useChaptersData from './useChaptersData';

const useBookReader = (bookId: string) => {
  const readerRef = useRef<HTMLDivElement>(null);
  const [chapterId, setChapterId] = useState<number | null>(null);
  const [progress, setProgress] = useState<number | null>(null);

  // Receiving chapters information
  const { chapters, orderChapters } = useChaptersData(bookId);
  const currentChapter = useMemo(() => {
    if (!chapters || chapterId === null) {
      return null;
    }

    return chapters[chapterId];
  }, [chapters, chapterId]);

  // Inserting components into a book
  const { isLoading, readerContent } = useChapterContent({
    bookId,
    chapterId,
  });

  const {
    totalPages,
    currentPage,
    readerPosition,
    changePage,
    changeProgress,
  } = usePages({
    readerRef,
    isLoading,
    currentChapter,
  });

  // Init chapter after receiving chapters information
  useEffect(() => {
    if (orderChapters.length === 0) {
      return;
    }

    setChapterId(() => orderChapters[0]);
  }, [changeProgress, orderChapters]);

  useEffect(() => {
    setProgress((prevProgress) => {
      if (currentPage === null || totalPages === null) {
        return prevProgress;
      }

      return ((currentPage - 1) * 100) / (totalPages - 1);
    });
  }, [currentPage, totalPages]);

  const onChangeProgress: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        changeProgress(Number(e.target.value));
      },
      [changeProgress],
    );

  return {
    readerRef,
    readerPosition,
    currentChapter,
    currentPage,
    changePage,
    totalPages,
    isLoading,
    readerContent,
    progress,
    onChangeProgress,
  };
};

export default useBookReader;
