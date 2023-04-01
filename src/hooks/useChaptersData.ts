import { TChapterData } from '@/types/reader';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { allBookChaptersFetch } from '@/services/books';

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
    if (chaptersData.length === 0) {
      return;
    }

    // TODO: make support several chapters
    setOrderChapters(() => [chaptersData[0].id]);
    setChapters(() => {
      const newChapterData: Record<number, TChapterData> = {};
      const chapter = chaptersData[0];

      const prevChapter = null;
      const nextChapter = null;
      const progress = [0, 100] as [number, number];

      newChapterData[chapter.id] = {
        ...chapter,
        progress,
        nextChapter,
        prevChapter,
      };

      return newChapterData;
    });
  }, [chaptersResponse]);

  return {
    chapters,
    orderChapters,
  };
};

export default useChaptersData;
