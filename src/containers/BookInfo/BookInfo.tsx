import CyrRating from '@/components/ui/CyrRating/CyrRating';
import CyrButton from '@/components/ui/CyrButton/CyrButton';
import styles from './BookInfo.module.scss';
import { TBook } from '@/types/book';
import CyrContainer from '@/components/ui/CyrContainer/CyrContainer';
import cn from 'classnames';
import getAuthors from '@/utils/getAuthors';
import { Link } from 'react-router-dom';
import { ERoutes } from '@/constants/routers';
import parse from 'html-react-parser';
import { REPLACED_COMPONENT_OPTIONS } from '@/constants/replased';

const BookInfo = ({
  id,
  thumbnail_image,
  thumbnail_component,
  reviews_avg_rating,
  authors,
  name,
  published,
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
        {published && (
          <div className={styles.bookInfo__buttons}>
            <Link to={`../${ERoutes.reader}/${id}`}>
              <CyrButton>Read book</CyrButton>
            </Link>
          </div>
        )}
      </div>
    </CyrContainer>
  );
};

export default BookInfo;
