import { TBook } from 'entities/Book';
import { CyrContainer } from 'shared/ui';
import styles from './BookDescription.module.scss';
import { BookCharacteristicsList } from 'features/BookCharacteristicsList';

export const BookDescription = (book: TBook) => {
  const { description } = book;

  return (
    <CyrContainer className={styles.bookDescription}>
      <div className={styles.bookDescription__text}>{description}</div>
      <div className={styles.bookDescription__divide} />
      <BookCharacteristicsList book={book} />
    </CyrContainer>
  );
};
