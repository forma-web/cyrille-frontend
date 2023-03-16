import BookInfo from '@/containers/BookInfo/BookInfo';
import BookDescription from '@/containers/BookDescription/BookDescription';
import styles from './BookPage.module.scss';
import BookArtists from '@/containers/BookArtists/BookArtists';

const BookPage = () => {
  return (
    <div className={styles.book}>
      <BookInfo />
      <BookDescription />
      <BookArtists />
    </div>
  );
};

export default BookPage;
