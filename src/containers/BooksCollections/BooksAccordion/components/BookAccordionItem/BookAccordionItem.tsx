import React, { useEffect, useState } from 'react';
import { TBookItem } from '@/types/book';
import styles from './BookAccordionItem.module.scss';
import { FastAverageColor } from 'fast-average-color';
import cn from 'classnames';

type TBookCarouselItem = {
  isActive: boolean;
  changeActive: (id: string | number) => void;
} & TBookItem;

const BookAccordionItem = ({
  id,
  title,
  authors,
  coverURL,
  changeActive,
  isActive,
}: TBookCarouselItem) => {
  const [background, setBackground] = useState<null | string>(null);

  useEffect(() => {
    if (!coverURL) return;

    const fac = new FastAverageColor();

    fac.getColorAsync(coverURL).then((color) => {
      setBackground(() => `rgba(${color.value.slice(0, 3).join(', ')}, 0.5`);
    });
  }, []);

  return (
    <div
      className={cn(styles.book, isActive && styles.book_active)}
      onClick={(e) => {
        changeActive(id);
        console.log(e);
      }}
    >
      <div
        className={cn(
          styles.book__cover,
          isActive && styles.book__cover_action
        )}
      >
        {coverURL && (
          <>
            <img src={coverURL} alt="" loading="lazy" />
            <div
              className={styles.book__background}
              style={{ backgroundColor: background ?? '' }}
            ></div>
          </>
        )}
      </div>
      <div className={styles.book__info}>
        <h4 className={styles.book__title}>{title}</h4>
        {authors && authors.length && (
          <div className={styles.book__author}>{authors.join(', ')}</div>
        )}
      </div>
    </div>
  );
};

export default BookAccordionItem;
