import React from 'react';
import BookItem from './components/BookItem/BookItem';
import styles from './BooksList.module.scss';
import { TBookItem, TBookList } from '@/types/book';


const BooksList = ({ books }: TBookList) => {
  if (!books.length) return null;

  return (
    <ul className={styles.booklist}>
      {books.map((book) => (
        <li>
          <BookItem {...book} />
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
