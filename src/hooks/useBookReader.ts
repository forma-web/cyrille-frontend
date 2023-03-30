import usePages from './usePages';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { allBookChaptersFetch, bookChapterFetch } from '@/services/books';
import {
  TChapterData,
  TNeededPages,
  TUseChapterContent,
  TUseChaptersData,
  TUseProgress,
} from '@/types/reader';

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
    const chapter = chapters[orderChapters[mid]];

    if (chapter.progress[0] <= target && target <= chapter.progress[1]) {
      return chapter.id;
    }

    if (target < chapter.progress[0]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return null;
};

const useChaptersData = ({ bookId, setChapterId }: TUseChaptersData) => {
  const [chapters, setChapters] = useState<Record<number, TChapterData>>({});
  const [orderChapters, setOrderChapters] = useState<number[]>([]);

  const { data: chaptersResponse } = useQuery({
    queryKey: ['books', bookId, 'chapters', 'all'],
    queryFn: () => allBookChaptersFetch(bookId),
  });

  useEffect(() => {
    if (!chaptersResponse) {
      return;
    }

    const { data: chaptersData } = chaptersResponse;

    chaptersData.sort((a, b) => a.order - b.order);

    const totalContentLength = chaptersData.reduce((acc, chapter) => {
      return acc + chapter.content_length;
    }, 0);

    if (chaptersData.length === 0) {
      return;
    }

    setChapterId(() => chaptersData[0].id);
    setOrderChapters(() => chaptersData.map((chapter) => chapter.id));
    setChapters(() => {
      const newChapterData: Record<number, TChapterData> = {};
      let currentContentLength = 0;

      chaptersData.forEach((chapter, index) => {
        const { id, content_length } = chapter;
        const prevChapter = index > 0 ? chaptersData[index - 1].id : null;
        const nextChapter =
          index < chaptersData.length - 1 ? chaptersData[index + 1].id : null;
        const progress = [
          currentContentLength,
          currentContentLength + Math.max(content_length - 1, 0),
        ].map((value) => (value / totalContentLength) * 100) as [
          number,
          number,
        ];

        if (index === chaptersData.length - 1) {
          progress[1] = 100;
        }

        currentContentLength += content_length;

        newChapterData[id] = {
          ...chapter,
          progress,
          nextChapter,
          prevChapter,
        };
      });

      return newChapterData;
    });
  }, [chaptersResponse, setChapterId]);

  return {
    chapters,
    orderChapters,
  };
};

const useProgress = ({
  chapterId,
  currentPage,
  totalPages,
  chapters,
  orderChapters,
}: TUseProgress) => {
  const [progress, setProgress] = useState<number | null>(null);
  const [totalStep, setTotalStep] = useState<number | null>(null);

  useEffect(() => {
    setProgress((prev) => {
      if (!chapterId || !currentPage || !totalPages) {
        return prev;
      }

      const chapter = chapters[chapterId];

      if (!chapter) {
        return prev;
      }

      if (orderChapters[0] === chapterId) {
        return ((currentPage - 1) * chapter.progress[1]) / (totalPages - 1);
      }

      return (
        (currentPage / totalPages) *
          (chapter.progress[1] - chapter.progress[0]) +
        chapter.progress[0]
      );
    });
  }, [chapterId, chapters, currentPage, orderChapters, totalPages]);

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
    progress,
    totalStep,
  };
};

const useChapterContent = ({
  bookId,
  chapterId,
  neededPages,
  setNeededPages,
}: TUseChapterContent) => {
  const { data: chapterFull, isLoading } = useQuery({
    queryKey: ['books', bookId, 'chapters', String(chapterId)],
    queryFn: () => bookChapterFetch(bookId, chapterId!),
    enabled: chapterId !== null,
  });

  const readerContent = useMemo(() => {
    if (!chapterFull) {
      return null;
    }

    return chapterFull.data.content;
  }, [chapterFull]);

  useEffect(() => {
    if (!chapterFull) {
      return;
    }

    setNeededPages((prev) => {
      if (!prev) {
        return null;
      }

      return { value: prev.value, isReadyChange: true };
    });
  }, [chapterFull, neededPages, setNeededPages]);

  return {
    readerContent,
    isLoading,
  };
};

const useBookReader = (bookId: string) => {
  const readerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [chapterId, setChapterId] = useState<number | null>(null);
  const [neededPages, setNeededPages] = useState<TNeededPages | null>({
    value: 0,
    isReadyChange: false,
  });

  useEffect(() => {
    setCurrentPage((prev) => {
      if (neededPages === null || !neededPages.isReadyChange || !totalPages) {
        return prev;
      }

      const { value } = neededPages;
      setNeededPages(() => null);

      return Math.floor(1 + value * (totalPages - 1));
    });
  }, [neededPages, totalPages]);

  const { isLoading, readerContent } = useChapterContent({
    neededPages,
    setNeededPages,
    bookId,
    chapterId,
  });
  const { chapters, orderChapters } = useChaptersData({ bookId, setChapterId });

  const nextPage = useCallback(() => {
    if (!currentPage || !totalPages) {
      return;
    }

    if (currentPage < totalPages) {
      setCurrentPage(() => currentPage + 1);
      return;
    }

    if (!chapterId || !chapters[chapterId]?.nextChapter) {
      return;
    }

    setChapterId(() => chapters[chapterId]?.nextChapter);
    setNeededPages(() => ({
      value: 0,
      isReadyChange: false,
    }));
  }, [chapterId, chapters, currentPage, totalPages]);

  const prevPage = useCallback(() => {
    if (!currentPage || !totalPages) {
      return;
    }

    if (currentPage > 1) {
      setCurrentPage(() => currentPage - 1);
      return;
    }

    if (!chapterId || !chapters[chapterId]?.prevChapter) {
      return;
    }

    setChapterId(() => chapters[chapterId]?.prevChapter);
    setNeededPages(() => ({
      value: 1,
      isReadyChange: false,
    }));
  }, [chapterId, chapters, currentPage, totalPages]);

  const { readerPosition, changePage } = usePages({
    readerRef,
    currentPage,
    setCurrentPage,
    setTotalPages,
    isLoading,
    nextPage,
    prevPage,
  });
  const progress = useProgress({
    chapterId,
    currentPage,
    totalPages,
    chapters,
    orderChapters,
  });

  const progressChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        const target = Number(e.target.value);

        const targetChapterId = getTargetChapter({
          orderChapters,
          chapters,
          target,
        });

        if (targetChapterId === null) {
          return;
        }

        const targetChapter = chapters[targetChapterId];

        if (!targetChapter) {
          return;
        }

        const { progress } = targetChapter;

        const newChapterPage =
          (progress[0] - target) / (progress[1] - progress[0]);

        setChapterId(() => targetChapterId);
        setNeededPages(() => ({
          value: newChapterPage,
          isReadyChange: false,
        }));
      },
      [chapters, orderChapters],
    );

  const nameChapter = useMemo(() => {
    if (!chapterId) {
      return null;
    }

    return chapters[chapterId]?.name ?? null;
  }, [chapters, chapterId]);

  return {
    readerRef,
    readerPosition,
    changePage,
    currentPage,
    totalPages,
    nameChapter,
    isLoading,
    readerContent,
    progressChange,
    ...progress,
  };
};

export default useBookReader;
