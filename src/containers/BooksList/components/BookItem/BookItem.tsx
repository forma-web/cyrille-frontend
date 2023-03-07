import React from 'react';
import { TBookItem } from '@/types/book';
import styles from './BookItem.module.scss';

const BookItem = ({ title, authors, description, coverURL }: TBookItem) => {
  return (
    <div className={styles.book}>
      <div className={styles.book__cover}>
        {coverURL && <img src={coverURL} alt="" />}
      </div>
      <div className={styles.book__info}>
        <h4 className={styles.book__title}>{title}</h4>
        {authors && authors.length && (
          <div className={styles.book__author}>{authors.join(', ')}</div>
        )}
        {description && (
          <div className={styles.book__description}>
            {description.slice(0, 200)}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookItem;
