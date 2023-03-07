import React from 'react';
import { TBookItem } from '@/types/book';
import styles from './BookCarouselItem.module.scss';

const BookCarouselItem = ({ title, authors, coverURL }: TBookItem) => {
  return (
    <div className={styles.book}>
      <div className={styles.book__cover}>
        {coverURL && <img src={coverURL} alt="" />}
      </div>
      <div className={styles.book__info}>
        {authors && authors.length && (
          <div className={styles.book__author}>{authors.join(', ')}</div>
        )}
        <h4 className={styles.book__title}>{title}</h4>
      </div>
    </div>
  );
};

export default BookCarouselItem;
