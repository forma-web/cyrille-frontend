import BookInfo from '@/containers/BookInfo/BookInfo';
import BookDescription from '@/containers/BookDescription/BookDescription';
import styles from './BookPage.module.scss';
import BookArtists from '@/containers/BookArtists/BookArtists';
import { useQuery } from '@tanstack/react-query';
import { bookFetch } from '@/services/books';
import { useParams } from 'react-router-dom';
import CyrLoader from '@/components/ui/CyrLoader/CyrLoader';

const BookPage = () => {
  const { bookId } = useParams();

  const { isLoading, data: book } = useQuery({
    queryKey: ['books', bookId],
    queryFn: () => bookFetch(bookId!),
  });

  if (isLoading || !book) return <CyrLoader />;

  return (
    <div className={styles.book}>
      <BookInfo {...book} />
      <BookDescription {...book} />
      <BookArtists artists={book.artists} />
    </div>
  );
};

export default BookPage;
