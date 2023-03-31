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

    const totalContentLength = chaptersData.reduce((acc, chapter) => {
      return acc + chapter.content_length;
    }, 0);

    if (chaptersData.length === 0) {
      return;
    }

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
          currentContentLength + content_length,
        ].map((value) => (value / totalContentLength) * 100) as [
          number,
          number,
        ];

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

export default useChaptersData;
