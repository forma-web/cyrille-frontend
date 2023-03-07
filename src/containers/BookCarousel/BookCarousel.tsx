import React from 'react';
import { TBookList } from '../../types/book';
import styles from './BookCarousel.module.scss';
import BookCarouselItem from './components/BookCarouselItem/BookCarouselItem';

const BookCarousel = ({ books }: TBookList) => {
  if (!books.length) return null;

  return (
    <div className={styles.carousel}>
      <h3 className={styles.carousel__title}>Новое</h3>
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
