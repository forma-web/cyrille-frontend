import { TChapterData } from '@/types/reader';
import { useCallback } from 'react';

export type TUseProgressBar = {
  currentChapter: TChapterData | null;
  totalPages: number | null;
  chapters: Record<number, TChapterData>;
  orderChapters: number[];
  setProgress: React.Dispatch<React.SetStateAction<number | null>>;
};

const useProgressBar = ({
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

export default useProgressBar;
