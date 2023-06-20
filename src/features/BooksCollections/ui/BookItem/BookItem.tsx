import { TBookItem } from '../../model/types';
import styles from './BookItem.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'shared/consts/routers';
import { getArtistNames } from 'entities/Artist';

export const BookItem = ({
  id,
  name,
  authors,
  description,
  thumbnail_image,
  isLarge,
}: TBookItem) => {
  const artistNames = getArtistNames(authors);

  return (
    <Link
      to={`${AppRoutes.books}/${id}`}
      className={cn(styles.book, isLarge && styles.book_large)}
    >
      <div className={styles.book__cover}>
        {thumbnail_image && <img src={thumbnail_image} alt="" loading="lazy" />}
      </div>
      <div className={styles.book__info}>
        <h4 className={styles.book__title}>{name}</h4>
        {!!authors?.length && (
          <div className={styles.book__author}>{artistNames}</div>
        )}
        {description && (
          <div className={styles.book__description}>
            {description.slice(0, 200)}
          </div>
        )}
      </div>
    </Link>
  );
};
