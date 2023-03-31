import usePages from './usePages';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TChapterData } from '@/types/reader';
import useChapterContent from './useChapterContent';
import useChaptersData from './useChaptersData';

const getTargetChapter = ({
  orderChapters,
  chapters,
  target,
}: {
  orderChapters: number[];
  chapters: Record<number, TChapterData>;
  target: number;
}) => {
  let left = 0;
  let right = orderChapters.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const chapterId = orderChapters[mid];
    const chapter = chapters[chapterId];
    const [startChapter, endChapter] = chapter.progress;

    if (startChapter <= target) {
      const targetInChapter =
        chapter.nextChapter === null
          ? target <= endChapter
          : target < endChapter;

      if (targetInChapter) {
        return chapter.id;
      }
    }

    if (target < startChapter) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return null;
};

const useBookReader = (bookId: string) => {
  const readerRef = useRef<HTMLDivElement>(null);
  const [chapterId, setChapterId] = useState<number | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const targetProgress = useRef<number | null>(0);
  const isRendering = useRef(false);

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

  const { totalPages, currentPage, readerPosition, changePage } = usePages({
    readerRef,
    isLoading,
    progress,
    setProgress,
    currentChapter,
    chapters,
  });
  // Init chapter after receiving chapters information
  useEffect(() => {
    if (orderChapters.length === 0) {
      return;
    }

    setChapterId(() => orderChapters[0]);
    setProgress(() => 0);
  }, [orderChapters]);

  const progressChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      setProgress(() => Number(e.target.value));
    }, []);

  // Load new chapter if progress changed
  useEffect(() => {
    if (progress === null) {
      return;
    }

    const targetChapterId = getTargetChapter({
      orderChapters,
      chapters,
      target: progress,
    });

    if (targetChapterId === null || !chapters[targetChapterId]) {
      return;
    }

    setChapterId(() => targetChapterId);
  }, [chapters, orderChapters, progress]);

  return {
    readerRef,
    readerPosition,
    currentPage,
    changePage,
    totalPages,
    isLoading,
    readerContent,
    progress,
    progressChange,
  };
};

export default useBookReader;
