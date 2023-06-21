import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getBookChapterQuery } from 'entities/Chapter';
import { parsingElement } from 'shared/lib/insertingDynamicComponent';
import { ALBERGUE_REPLACEMENT_RULES_REMOVE_THIS_CONFIG } from 'widgets/books/Albergue';

type TUseChapterContent = {
  bookId: string;
  chapterId: number | null;
};

const convertHtmlToComponent = parsingElement.createParserHtml(
  ALBERGUE_REPLACEMENT_RULES_REMOVE_THIS_CONFIG,
);

// TODO: refactor this hook
export const useChapterContent = ({
  bookId,
  chapterId,
}: TUseChapterContent) => {
  const { data: chapterFull, isLoading } = useQuery({
    queryKey: ['books', bookId, 'chapters', String(chapterId)],
    queryFn: () => getBookChapterQuery(bookId, String(chapterId)),
    enabled: chapterId !== null,
  });

  const readerContent = useMemo(() => {
    if (!chapterFull) {
      return null;
    }

    return convertHtmlToComponent(chapterFull.data.content);
  }, [chapterFull]);

  return {
    readerContent,
    isLoading,
  };
};
