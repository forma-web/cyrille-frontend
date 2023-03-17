import { TBookItem } from '@/types/book';
import styles from './BookCarouselItem.module.scss';

type TBookCarouselItem = {
  isAccordion?: boolean;
} & TBookItem;

const BookCarouselItem = ({
  name,
  authors,
  thumbnail_image,
}: TBookCarouselItem) => {
  return (
    <div className={styles.book}>
      <div className={styles.book__cover}>
        {thumbnail_image && <img src={thumbnail_image} alt="" loading="lazy" />}
      </div>
      <div className={styles.book__info}>
        {authors && authors.length && (
          <div className={styles.book__author}>{authors.join(', ')}</div>
        )}
        <h4 className={styles.book__title}>{name}</h4>
      </div>
    </div>
  );
};

export default BookCarouselItem;
