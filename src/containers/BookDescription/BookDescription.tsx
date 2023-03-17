import { TBook } from '@/types/book';
import CyrContainer from '@/components/ui/CyrContainer/CyrContainer';
import styles from './BookDescription.module.scss';

const STATISTICS = [
  {
    title: 'Relesed',
    value: '2022',
    caption: '18 February',
  },
  {
    title: 'Length',
    value: '3',
    caption: 'paper pages',
  },
  {
    title: 'Language',
    value: 'Eng',
    caption: 'english',
  },
];

const BookDescription = (book: TBook) => {
  const { description } = book;

  return (
    <CyrContainer className={styles.bookDescription}>
      <div className={styles.bookDescription__text}>{description}</div>
      <div className={styles.bookDescription__divide} />
      <ul className={styles.statistic}>
        {STATISTICS.map((item) => (
          <li key={item.title} className={styles.statistic__item}>
            <div className={styles.statistic__title}>{item.title}</div>
            <div className={styles.statistic__value}>{item.value}</div>
            <div className={styles.statistic__caption}>{item.caption}</div>
          </li>
        ))}
      </ul>
    </CyrContainer>
  );
};

export default BookDescription;
