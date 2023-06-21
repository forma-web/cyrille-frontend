import { BooksList } from 'features/BooksCollections';
import { useQuery } from '@tanstack/react-query';
import { CyrLoader } from 'shared/ui';
import { getAllBooksQuery } from 'entities/Book';

export const AllBooksList = () => {
  const { isLoading, data: books } = useQuery({
    queryKey: ['books', 'all'],
    queryFn: getAllBooksQuery,
  });

  if (isLoading || !books) return <CyrLoader />;

  return <BooksList books={books.data} />;
};
