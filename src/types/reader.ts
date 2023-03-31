import { TChapterInfo } from '@/types/chapter';

export type TChapterData = TChapterInfo & {
  progress: [number, number];
  nextChapter: number | null;
  prevChapter: number | null;
};

export type TUseProgress = {
  chapterId: number | null;
  currentPage: number | null;
  totalPages: number | null;
  chapters: Record<number, TChapterData>;
  orderChapters: number[];
};
