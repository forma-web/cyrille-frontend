import CyrRhombus from '@/components/ui/CyrRhombus/CyrRhombus';
import styles from './BookInfo.module.scss';

const BookInfo = () => {
  return (
    <div className={styles.bookInfo}>
      <div className={styles.bookInfo__cover}></div>
      <div className={styles.bookInfo__body}>
        <h1 className={styles.bookInfo__title}>How to kill your family</h1>
        <div className={styles.bookInfo__author}>Bella Mackie</div>
        <div className={styles.bookInfo__rating}>
          <CyrRhombus />
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
