import React, { useCallback, useState } from 'react';
import { TBookCarousel } from '@/types/book';
import '@/assets/styles/carousel.scss';
import styles from './BooksAccordion.module.scss';
import BookAccordionItem from './components/BookAccordionItem/BookAccordionItem';
import cn from 'classnames';

const BooksAccordion = ({ title, books }: TBookCarousel) => {
  const [activeBook, setActiveBook] = useState<string | null>(null);

  const updateActiveBook = useCallback((id: string | number) => {
    setActiveBook((prev) => (prev === String(id) ? null : String(id)));
  }, []);

  if (!books.length) return null;

  return (
    <div className={cn(styles.carousel, 'carousel')}>
      {title && <h3 className={styles.carousel__title}>{title}</h3>}
      <ul className={cn(styles.carousel__list, 'carousel__list')}>
        {books.map((book) => (
          <li
            key={book.id}
            className={cn(
              styles.carousel__item,
              activeBook === String(book.id) && styles.carousel__item_active
            )}
          >
            <BookAccordionItem
              isActive={activeBook === String(book.id)}
              changeActive={updateActiveBook}
              {...book}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksAccordion;
