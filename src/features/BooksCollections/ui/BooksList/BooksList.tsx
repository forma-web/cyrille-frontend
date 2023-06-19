import { BookItem } from '../BookItem/BookItem';
import styles from './BooksList.module.scss';
import { TBookList } from '../../model/types';

export const BooksList = ({ books }: TBookList) => {
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
