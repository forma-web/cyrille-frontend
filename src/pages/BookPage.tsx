import BookInfo from '@/containers/BookInfo/BookInfo';
import BookDescription from '@/containers/BookDescription/BookDescription';
import styles from './BookPage.module.scss';

const BookPage = () => {
  return (
    <div className={styles.book}>
      <BookInfo />
      <BookDescription />
    </div>
  );
};

export default BookPage;
