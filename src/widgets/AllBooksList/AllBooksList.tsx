import { BooksList } from 'features/BooksCollections';
import { useQuery } from '@tanstack/react-query';
import { allBooksFetch } from '@/services/books';
import { CyrLoader } from 'shared/ui';

export const AllBooksList = () => {
  const { isLoading, data: books } = useQuery({
    queryKey: ['books', 'all'],
    queryFn: allBooksFetch,
  });

  if (isLoading || !books) return <CyrLoader />;

  return <BooksList books={books.data} />;
};
