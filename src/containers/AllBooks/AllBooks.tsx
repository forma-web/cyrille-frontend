import BooksList from '@/containers/BooksCollections/BooksList/BooksList';
import { useQuery } from '@tanstack/react-query';
import { allBooksFetch } from '@/services/books';
import CyrLoader from '@/components/ui/CyrLoader/CyrLoader';

const AllBooks = () => {
  const { isLoading, data: books } = useQuery({
    queryKey: ['books', 'all'],
    queryFn: allBooksFetch,
  });

  if (isLoading || !books) return <CyrLoader />;

  return <BooksList books={books.data} />;
};

export default AllBooks;
