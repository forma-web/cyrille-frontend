import CyrRating from '@/components/CyrRating/CyrRating';
// import { AlbergueCover } from '@/assets/books/AlbergueCover/AlbergueCover';
import CyrButton from '@/components/ui/CyrButton/CyrButton';
import styles from './BookInfo.module.scss';

const BookInfo = () => {
  return (
    <div className={styles.bookInfo}>
      <div className={styles.bookInfo__background}>
        <img src="/images/1.png" />
      </div>
      <div className={styles.bookInfo__cover}>
        <img src="/images/1.png" />
        {/* <AlbergueCover /> */}
      </div>
      <div className={styles.bookInfo__body}>
        <div className={styles.bookInfo__text}>
          <h1 className={styles.bookInfo__title}>The Albergue</h1>
          <div className={styles.bookInfo__author}>Cyrille D’Essaí</div>
        </div>
        <div className={styles.bookInfo__rating}>
          <CyrRating rating={4.6} signature />
        </div>
        <div className={styles.bookInfo__buttons}>
          <CyrButton>Read book</CyrButton>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
