import React from 'react';
import { TBookItem } from '@/types/book';
import styles from './BookCarouselItem.module.scss';
import cn from 'classnames';

type TBookCarouselItem = {
  isAccordion?: boolean;
} & TBookItem;

const BookCarouselItem = ({
  title,
  authors,
  coverURL,
}: TBookCarouselItem) => {
  return (
    <div className={styles.book}>
      <div className={styles.book__cover}>
        {coverURL && <img src={coverURL} alt="" loading="lazy" />}
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
