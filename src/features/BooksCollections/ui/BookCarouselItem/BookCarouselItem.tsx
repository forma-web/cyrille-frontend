import { getArtistNames } from 'entities/Artist';
import { TBookItem } from '../../model/types';
import styles from './BookCarouselItem.module.scss';

type TBookCarouselItem = {
  isAccordion?: boolean;
} & TBookItem;

export const BookCarouselItem = ({
  name,
  authors,
  thumbnail_image,
}: TBookCarouselItem) => {
  const authorsNames = getArtistNames(authors);

  return (
    <div className={styles.book}>
      <div className={styles.book__cover}>
        {thumbnail_image && <img src={thumbnail_image} alt="" loading="lazy" />}
      </div>
      <div className={styles.book__info}>
        {authors && authors.length && (
          <div className={styles.book__author}>{authorsNames}</div>
        )}
        <h4 className={styles.book__title}>{name}</h4>
      </div>
    </div>
  );
};
