import { TResponse } from './response';

export type TChapterInfo = {
  id: number;
  order: number;
  name?: string;
  content_length: number;
};

export type TChapter = TChapterInfo & {
  content: string;
  language: string;
};

export type TChapterInfoResponse = TResponse<TChapterInfo[]>;
export type TChapterResponse = TResponse<TChapter>;
