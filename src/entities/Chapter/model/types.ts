import { TResponse } from 'shared/types/api';

type TChapterInfo = {
  id: number;
  order: number;
  name?: string;
  content_length: number;
};

export type TChapter = TChapterInfo & {
  content: string;
  language: string;
};

export type TChapterData = TChapterInfo & {
  progress: [number, number];
  nextChapter: number | null;
  prevChapter: number | null;
};

export type TChapterInfoResponse = TResponse<TChapterInfo[]>;
export type TChapterResponse = TResponse<TChapter>;
