import BookInfo from '@/containers/BookInfo/BookInfo';
import { useQuery } from '@tanstack/react-query';
import { bookFetch } from '@/services/books';
import { Navigate, useParams } from 'react-router-dom';
import { CyrLoader } from 'shared/ui';
import { BookArtists, BookDescription, BookReviews } from 'widgets/Book';
import { BookLinkToReader } from 'features/BookLinkToReader';

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
      <BookLinkToReader {...book.data} />
    </div>
  );
};

export default BookPage;
