import { TChapterInfo } from '@/types/chapter';

export type TChapterData = TChapterInfo & {
  progress: [number, number];
  nextChapter: number | null;
  prevChapter: number | null;
};

export type TUseChaptersData = {
  bookId: string;
  setChapterId: React.Dispatch<React.SetStateAction<number | null>>;
};

export type TUseProgress = {
  chapterId: number | null;
  currentPage: number | null;
  totalPages: number | null;
  chapters: Record<number, TChapterData>;
  orderChapters: number[];
};

export type TUseChapterContent = {
  bookId: string;
  chapterId: number | null;
  neededPages: TNeededPages | null;
  setNeededPages: React.Dispatch<React.SetStateAction<TNeededPages | null>>;
};

export type TNeededPages = {
  value: number;
  isReadyChange: boolean;
};

export type TUsePages = {
  readerRef: React.RefObject<HTMLDivElement>;
  currentPage: number | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<number | null>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number | null>>;
  isLoading: boolean;
  nextPage: () => void;
  prevPage: () => void;
};
