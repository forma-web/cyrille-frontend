import { CyrRating } from 'shared/ui';
import styles from './BookInfo.module.scss';
import { TBook } from 'entities/Book';
import { CyrContainer } from 'shared/ui';
import cn from 'classnames';
import { TBookPerson, getArtistNames } from 'entities/Artist';
import { BookCover } from '../BookCover/BookCover';

type TBookTitleProps = {
  name: string;
  authors: TBookPerson[];
};

const BookTitle = ({ name, authors }: TBookTitleProps) => {
  const authorNames = getArtistNames(authors);

  return (
    <div className={styles.bookInfo__text}>
      <h1 className={styles.bookInfo__title}>{name}</h1>
      {!!authorNames && (
        <div className={styles.bookInfo__author}>{authorNames}</div>
      )}
    </div>
  );
};

export const BookInfo = ({
  thumbnail_image,
  thumbnail_component,
  reviews_avg_rating,
  authors,
  name,
}: TBook) => {
  return (
    <CyrContainer className={cn(styles.bookInfo, styles.bookInfo_header)}>
      <div className={styles.bookInfo__background}>
        <img src={thumbnail_image} />
      </div>
      <div className={styles.bookInfo__cover}>
        <BookCover
          thumbnailComponent={thumbnail_component}
          thumbnailImage={thumbnail_image}
        />
      </div>
      <div className={styles.bookInfo__body}>
        <BookTitle name={name} authors={authors} />
        <div className={styles.bookInfo__rating}>
          <CyrRating rating={reviews_avg_rating} signature />
        </div>
      </div>
    </CyrContainer>
  );
};
