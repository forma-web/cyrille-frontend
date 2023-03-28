import usePages from './usePages';
import { useEffect, useMemo, useRef, useState } from 'react';
import { TChapterInfo } from '../types/chapter';

type TChapterData = TChapterInfo & {
  progress: [number, number];
  nextChapter: number | null;
  prevChapter: number | null;
};

const CHAPTERS_DATA = {
  data: [
    {
      id: 1,
      order: 1,
      name: 'Chapter 1',
      content_length: 498,
    },
    {
      id: 2,
      order: 2,
      name: 'Chapter 2',
      content_length: 124,
    },
    {
      id: 3,
      order: 3,
      name: 'Chapter 3',
      content_length: 262,
    },
    {
      id: 4,
      order: 4,
      name: 'Chapter 4',
      content_length: 2202,
    },
  ],
};

const useBookReader = () => {
  const {
    readerRef,
    currentPage,
    readerPosition,
    totalChapterPages,
    changePage,
  } = usePages();

  const [currentChapter, setCurrentChapter] = useState<number | null>(null);
  const [chapters, setChapters] = useState<Record<number, TChapterData>>({});
  const [orderedChapters, setOrderedChapters] = useState<number[]>([]);

  useEffect(() => {
    const { data: chaptersData } = CHAPTERS_DATA;
    chaptersData.sort((a, b) => a.order - b.order);

    const totalContentLength = chaptersData.reduce((acc, chapter) => {
      return acc + chapter.content_length;
    }, 0);

    setOrderedChapters(() => chaptersData.map((chapter) => chapter.id));
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
  }, []);

  return {
    readerRef,
    currentPage,
    readerPosition,
    totalPages: totalChapterPages,
    changePage,
  };
};

export default useBookReader;
