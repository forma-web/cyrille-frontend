import usePages from './usePages';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TChapterData, TUseProgress } from '@/types/reader';
import useChapterContent from './useChapterContent';
import useChaptersData from './useChaptersData';

const getChapterRange = ({
  chapters,
  chapterId,
}: {
  chapters: Record<number, TChapterData>;
  chapterId: number;
}) => {
  const { nextChapter, progress } = chapters[chapterId];

  return {
    start: progress[0],
    end: nextChapter ? chapters[nextChapter].progress[0] : progress[1],
  };
};

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
    const { start: startChapter, end: endChapter } = getChapterRange({
      chapters,
      chapterId,
    });

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

const useProgress = ({
  chapterId,
  currentPage,
  totalPages,
  chapters,
  orderChapters,
}: TUseProgress) => {
  const [totalStep, setTotalStep] = useState<number | null>(null);

  useEffect(() => {
    setTotalStep((prev) => {
      if (!chapterId || !totalPages) {
        return prev;
      }

      const chapter = chapters[chapterId];

      if (!chapter) {
        return prev;
      }

      const lengthPage = chapter.content_length / totalPages;

      if (totalPages === 0 || lengthPage === 0) {
        return prev;
      }

      return orderChapters.reduce((acc, currChapterId) => {
        const currChapter = chapters[currChapterId];

        if (!chapter) {
          return acc;
        }

        if (currChapterId === chapterId) {
          return acc + totalPages;
        }

        if (currChapter.content_length === 0) {
          return acc + 1;
        }

        return acc + Math.ceil(currChapter.content_length / lengthPage);
      }, 0);
    });
  }, [chapterId, chapters, orderChapters, totalPages]);

  return {
    totalStep,
  };
};

const useBookReader = (bookId: string) => {
  const readerRef = useRef<HTMLDivElement>(null);
  const [chapterId, setChapterId] = useState<number | null>(null);
  const [progress, setProgress] = useState<number | null>(null);

  const { isLoading, readerContent } = useChapterContent({
    bookId,
    chapterId,
  });

  // TODO: remove this
  const changePage = () => {
    return;
  };

  // Receiving chapters information
  const { chapters, orderChapters } = useChaptersData(bookId);
  const currentChapter = useMemo(() => {
    if (!chapters || chapterId === null) {
      return null;
    }

    return chapters[chapterId];
  }, [chapters, chapterId]);

  const { totalPages, currentPage, readerPosition } = usePages({
    readerRef,
    isLoading,
    progress,
    currentChapter,
  });
  // Init chapter after receiving chapters information
  useEffect(() => {
    if (orderChapters.length === 0) {
      return;
    }

    setChapterId(() => orderChapters[0]);
    setProgress(() => 0);
  }, [orderChapters]);

  // const nextPage = useCallback(() => {
  //   if (!currentPage || !totalPages) {
  //     return;
  //   }

  //   if (currentPage < totalPages) {
  //     setCurrentPage(() => currentPage + 1);
  //     return;
  //   }

  //   if (!chapterId || !chapters[chapterId]?.nextChapter) {
  //     return;
  //   }

  //   setChapterId(() => chapters[chapterId]?.nextChapter);
  // }, [chapterId, chapters, currentPage, totalPages]);

  // const prevPage = useCallback(() => {
  //   if (!currentPage || !totalPages) {
  //     return;
  //   }

  //   if (currentPage > 1) {
  //     setCurrentPage(() => currentPage - 1);
  //     return;
  //   }

  //   if (!chapterId || !chapters[chapterId]?.prevChapter) {
  //     return;
  //   }

  //   setChapterId(() => chapters[chapterId]?.prevChapter);
  // }, [chapterId, chapters, currentPage, totalPages]);

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
