import { useEffect, useState } from 'react';
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
  name,
  authors,
  thumbnail_image,
  changeActive,
  isActive,
}: TBookCarouselItem) => {
  const [background, setBackground] = useState<null | string>(null);

  useEffect(() => {
    if (!thumbnail_image) return;

    const fac = new FastAverageColor();

    fac.getColorAsync(thumbnail_image).then((color) => {
      setBackground(() => `rgba(${color.value.slice(0, 3).join(', ')}, 0.5`);
    });
  }, [thumbnail_image]);

  return (
    <div
      className={cn(styles.book, isActive && styles.book_active)}
      onClick={() => {
        changeActive(id);
      }}
    >
      <div
        className={cn(
          styles.book__cover,
          isActive && styles.book__cover_action,
        )}
      >
        {thumbnail_image && (
          <>
            <img src={thumbnail_image} alt="" loading="lazy" />
            <div
              className={styles.book__background}
              style={{ backgroundColor: background ?? '' }}
            ></div>
          </>
        )}
      </div>
      <div className={styles.book__info}>
        <h4 className={styles.book__title}>{name}</h4>
        {authors && authors.length && (
          <div className={styles.book__author}>{authors.join(', ')}</div>
        )}
      </div>
    </div>
  );
};

export default BookAccordionItem;
