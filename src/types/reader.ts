import { TChapterInfo } from '@/types/chapter';

export type TChapterData = TChapterInfo & {
  progress: [number, number];
  nextChapter: number | null;
  prevChapter: number | null;
};
