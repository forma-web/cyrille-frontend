import usePages from './usePages';
import { useEffect, useMemo, useRef, useState } from 'react';
import { TChapterInfo } from '@/types/chapter';
import { useQuery } from '@tanstack/react-query';
import { allBookChaptersFetch, bookChapterFetch } from '@/services/books';

type TChapterData = TChapterInfo & {
  progress: [number, number];
  nextChapter: number | null;
  prevChapter: number | null;
};

type TUseChaptersData = {
  bookId: string;
  setChapterId: React.Dispatch<React.SetStateAction<number | null>>;
};

type TUseProgress = {
  chapterId: number | null;
  currentPage: number | null;
  totalPages: number | null;
  chapters: Record<number, TChapterData>;
  orderChapters: number[];
};

type TUseChapterContent = {
  bookId: string;
  chapterId: number | null;
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
  const progress = useMemo(() => {
    if (!chapterId || !currentPage || !totalPages) {
      return null;
    }

    const chapter = chapters[chapterId];

    if (!chapter) {
      return null;
    }

    return (
      (currentPage / totalPages) * (chapter.progress[1] - chapter.progress[0]) +
      chapter.progress[0]
    );
  }, [chapterId, chapters, currentPage, totalPages]);

  const totalStep = useMemo(() => {
    if (!chapterId || !totalPages) {
      return null;
    }

    const chapter = chapters[chapterId];

    if (!chapter) {
      return null;
    }

    const lengthPage = chapter.content_length / totalPages;

    if (totalPages === 0 || lengthPage === 0) {
      return null;
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
  }, [chapterId, chapters, orderChapters, totalPages]);

  return {
    progress,
    totalStep,
  };
};

const useChapterContent = ({ bookId, chapterId }: TUseChapterContent) => {
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

  const chapterContent = useChapterContent({
    bookId,
    chapterId,
  });
  const { isLoading } = chapterContent;

  const { chapters, orderChapters } = useChaptersData({ bookId, setChapterId });
  const { readerPosition, changePage } = usePages({
    readerRef,
    currentPage,
    setCurrentPage,
    setTotalPages,
    isLoading,
  });
  const progress = useProgress({
    chapterId,
    currentPage,
    totalPages,
    chapters,
    orderChapters,
  });

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
    ...chapterContent,
    ...progress,
  };
};

export default useBookReader;
