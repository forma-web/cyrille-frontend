import BookInfo from '@/containers/BookInfo/BookInfo';
import styles from './BookPage.module.scss';

const BookPage = () => {
  return (
    <div className={styles.book}>
      <BookInfo />
    </div>
  );
};

export default BookPage;
