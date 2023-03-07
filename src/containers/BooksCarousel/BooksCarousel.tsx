import React from 'react';
import { TBookList } from '../../types/book';
import styles from './BooksCarousel.module.scss';
import BookCarouselItem from './components/BookCarouselItem/BookCarouselItem';

type TBookCarousel = {
  title?: string;
} & TBookList;

const BookCarousel = ({ title, books }: TBookCarousel) => {
  if (!books.length) return null;

  return (
    <div className={styles.carousel}>
      {title && <h3 className={styles.carousel__title}>{title}</h3>}
      <ul className={styles.carousel__list}>
        {books.map((book) => (
          <li className={styles.carousel__item}>
            <BookCarouselItem {...book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookCarousel;
