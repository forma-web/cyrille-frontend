import BookItem from './components/BookItem/BookItem';
import styles from './BooksList.module.scss';
import { TBookList } from '@/types/book';

const BooksList = ({ books }: TBookList) => {
  if (!books.length) return null;

  return (
    <ul className={styles.booklist}>
      {books.map((book) => (
        <li key={book.id} className={styles.booklist__item}>
          <BookItem {...book} />
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
