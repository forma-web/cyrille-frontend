import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import parse from 'html-react-parser';
import { bookChapterFetch } from '@/services/books';
import { REPLACED_COMPONENT_OPTIONS } from '@/constants/replased';

type TUseChapterContent = {
  bookId: string;
  chapterId: number | null;
};

const useChapterContent = ({ bookId, chapterId }: TUseChapterContent) => {
  const { data: chapterFull, isLoading } = useQuery({
    queryKey: ['books', bookId, 'chapters', String(chapterId)],
    queryFn: () => bookChapterFetch(bookId, chapterId!),
    enabled: chapterId !== null,
  });

  const readerContent = useMemo(() => {
    if (!chapterFull) {
      return null;
    }

    return parse(chapterFull.data.content, REPLACED_COMPONENT_OPTIONS);
  }, [chapterFull]);

  return {
    readerContent,
    isLoading,
  };
};

export default useChapterContent;
