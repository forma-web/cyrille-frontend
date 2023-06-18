import { CyrRating } from 'shared/ui';
import styles from './BookInfo.module.scss';
import { TBook } from '@/types/book';
import { CyrContainer } from 'shared/ui';
import cn from 'classnames';
import getAuthors from '@/utils/getAuthors';
import parse from 'html-react-parser';
import { REPLACED_COMPONENT_OPTIONS } from '@/constants/replased';

const BookInfo = ({
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
        {thumbnail_component ? (
          parse(thumbnail_component, REPLACED_COMPONENT_OPTIONS)
        ) : (
          <img src={thumbnail_image} />
        )}
      </div>
      <div className={styles.bookInfo__body}>
        <div className={styles.bookInfo__text}>
          <h1 className={styles.bookInfo__title}>{name}</h1>
          {!!authors?.length && (
            <div className={styles.bookInfo__author}>{getAuthors(authors)}</div>
          )}
        </div>
        <div className={styles.bookInfo__rating}>
          <CyrRating rating={reviews_avg_rating} signature />
        </div>
      </div>
    </CyrContainer>
  );
};

export default BookInfo;
