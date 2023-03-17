import CyrRating from '@/components/ui/CyrRating/CyrRating';
// import { AlbergueCover } from '@/assets/books/AlbergueCover/AlbergueCover';
import CyrButton from '@/components/ui/CyrButton/CyrButton';
import styles from './BookInfo.module.scss';
import { TBook } from '@/types/book';
import CyrContainer from '@/components/ui/CyrContainer/CyrContainer';
import cn from 'classnames';
import getAuthors from '@/utils/getAuthors';

const BookInfo = ({ thumbnail_image, authors, name }: TBook) => {
  console.log(authors);

  return (
    <CyrContainer className={cn(styles.bookInfo, styles.bookInfo_header)}>
      <div className={styles.bookInfo__background}>
        <img src={thumbnail_image} />
      </div>
      <div className={styles.bookInfo__cover}>
        <img src={thumbnail_image} />
      </div>
      <div className={styles.bookInfo__body}>
        <div className={styles.bookInfo__text}>
          <h1 className={styles.bookInfo__title}>{name}</h1>
          {!!authors?.length && (
            <div className={styles.bookInfo__author}>{getAuthors(authors)}</div>
          )}
        </div>
        <div className={styles.bookInfo__rating}>
          <CyrRating rating={4.6} signature />
        </div>
        <div className={styles.bookInfo__buttons}>
          <CyrButton>Read book</CyrButton>
        </div>
      </div>
    </CyrContainer>
  );
};

export default BookInfo;
