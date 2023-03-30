import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import parse from 'html-react-parser';
import { bookChapterFetch } from '@/services/books';
import { TUseChapterContent } from '@/types/reader';
import { REPLACED_COMPONENT_OPTIONS } from '@/constants/replased';

const useChapterContent = ({
  bookId,
  chapterId,
  neededPages,
  setNeededPages,
}: TUseChapterContent) => {
  const { data: chapterFull, isLoading } = useQuery({
    queryKey: ['books', bookId, 'chapters', String(chapterId)],
    queryFn: () => bookChapterFetch(bookId, chapterId!),
    enabled: chapterId !== null,
  });

  const readerContent = useMemo(() => {
    if (!chapterFull) {
      return null;
    }

    console.log(parse(chapterFull.data.content, REPLACED_COMPONENT_OPTIONS));

    return parse(chapterFull.data.content, REPLACED_COMPONENT_OPTIONS);
  }, [chapterFull]);

  useEffect(() => {
    if (!chapterFull) {
      return;
    }

    setNeededPages((prev) => {
      if (!prev) {
        return null;
      }

      return { value: prev.value, isReadyChange: true };
    });
  }, [chapterFull, neededPages, setNeededPages]);

  //   useEffect(() => {
  //     const unmountFns: (() => void)[] = [];

  //     Object.keys(REPLACED_COMPONENT).forEach((key) => {
  //       const dynamicElements = document.querySelectorAll(
  //         `[data-element="${key}"]`,
  //       );

  //       dynamicElements.forEach((element) => {
  //         ReactDOM.render(REPLACED_COMPONENT[key](), element);

  //         unmountFns.push(() => {
  //           ReactDOM.unmountComponentAtNode(element);
  //         });
  //       });
  //     });

  //     return () => {
  //       unmountFns.forEach((fn) => fn());
  //     };
  //   }, [chapterFull]);

  return {
    readerContent,
    isLoading,
  };
};

export default useChapterContent;
