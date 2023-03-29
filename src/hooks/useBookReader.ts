import usePages from './usePages';
import { useEffect, useMemo, useRef, useState } from 'react';
import { TChapterInfo } from '@/types/chapter';
import { useQuery } from '@tanstack/react-query';
import { allBookChaptersFetch } from '@/services/books';

type TChapterData = TChapterInfo & {
  progress: [number, number];
  nextChapter: number | null;
  prevChapter: number | null;
};

const useChaptersData = (bookId: string) => {
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
  }, [chaptersResponse]);

  return {
    chapters,
    orderChapters,
  };
};

const useBookReader = (bookId: string) => {
  const readerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [chapterId, setChapterId] = useState<number | null>(null);

  const { readerPosition, changePage } = usePages({
    readerRef,
    currentPage,
    totalPages,
    setCurrentPage,
    setTotalPages,
  });
  const { chapters, orderChapters } = useChaptersData(bookId);

  return {
    readerRef,
    readerPosition,
    changePage,
    currentPage,
    totalPages,
  };
};

export default useBookReader;
