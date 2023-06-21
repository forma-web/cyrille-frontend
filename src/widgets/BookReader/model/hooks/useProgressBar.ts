import { TChapterData } from 'entities/Chapter';
import { useCallback } from 'react';

export type TUseProgressBar = {
  currentChapter: TChapterData | null;
  totalPages: number | null;
  chapters: Record<number, TChapterData>;
  orderChapters: number[];
  setProgress: React.Dispatch<React.SetStateAction<number | null>>;
};

// TODO: refactor this hook
export const useProgressBar = ({
  currentChapter,
  totalPages,
  chapters,
  orderChapters,
  setProgress,
}: TUseProgressBar) => {
  const progressChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      setProgress(() => Number(e.target.value));
    }, []);

  return {
    progressChange,
  };
};
