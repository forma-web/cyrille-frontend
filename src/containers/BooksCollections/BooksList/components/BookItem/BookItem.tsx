import { TBookItem } from '@/types/book';
import styles from './BookItem.module.scss';
import cn from 'classnames';

const BookItem = ({
  title,
  authors,
  description,
  coverURL,
  isLarge,
}: TBookItem) => {
  return (
    <div className={cn(styles.book, isLarge && styles.book_large)}>
      <div className={styles.book__cover}>
        {coverURL && <img src={coverURL} alt="" loading="lazy" />}
      </div>
      <div className={styles.book__info}>
        <h4 className={styles.book__title}>{title}</h4>
        {authors && authors.length && (
          <div className={styles.book__author}>{authors.join(', ')}</div>
        )}
        {description && (
          <div className={styles.book__description}>
            {description.slice(0, 200)}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookItem;
