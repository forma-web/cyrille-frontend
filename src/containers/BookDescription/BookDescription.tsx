import { TBook } from '@/types/book';
import CyrContainer from '@/components/ui/CyrContainer/CyrContainer';
import styles from './BookDescription.module.scss';
import { STATISTICS_BOOK } from '@/constants/book';

const BookDescription = (book: TBook) => {
  const { description } = book;

  return (
    <CyrContainer className={styles.bookDescription}>
      <div className={styles.bookDescription__text}>{description}</div>
      <div className={styles.bookDescription__divide} />
      <ul className={styles.statistic}>
        {STATISTICS_BOOK.map(({ title, value, caption }) => (
          <li key={title} className={styles.statistic__item}>
            <div className={styles.statistic__title}>{title}</div>
            <div className={styles.statistic__value}>
              {typeof value === 'string' ? value : value(book)}
            </div>
            <div className={styles.statistic__caption}>
              {typeof caption === 'string' ? caption : caption(book)}
            </div>
          </li>
        ))}
      </ul>
    </CyrContainer>
  );
};

export default BookDescription;
