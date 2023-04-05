import BookInfo from '@/containers/BookInfo/BookInfo';
import BookDescription from '@/containers/BookDescription/BookDescription';
import BookArtists from '@/containers/BookArtists/BookArtists';
import { useQuery } from '@tanstack/react-query';
import { bookFetch } from '@/services/books';
import { Link, Navigate, useParams } from 'react-router-dom';
import CyrLoader from '@/components/ui/CyrLoader/CyrLoader';
import BookReviews from '@/containers/BookReviews/BookReviews';
import CyrButton from '../components/ui/CyrButton/CyrButton';
import { ERoutes } from '../constants/routers';
import BookLink from '../containers/BookLink/BookLink';

const BookPage = () => {
  const { bookId } = useParams();

  const { isLoading, data: book } = useQuery({
    queryKey: ['books', bookId],
    queryFn: () => bookFetch(bookId!),
  });

  if (isLoading || !book) return <CyrLoader />;

  if (!bookId) return <Navigate to="/404" />;

  return (
    <div>
      <BookInfo {...book.data} />
      <BookDescription {...book.data} />
      <BookArtists artists={book.data.artists} />
      <BookReviews bookId={bookId} />
      <BookLink {...book.data} />
    </div>
  );
};

export default BookPage;
