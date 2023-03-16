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
    caption: 'pages',
  },
  {
    title: 'Language',
    value: 'Eng',
    caption: 'english',
  },
];

const BookDescription = () => {
  return (
    <section className={styles.bookDescription}>
      <div className={styles.bookDescription__text}>
        Multipolar wars could be the last in human history. Architect John
        Stingray is one of the relocants having arrived to one of the safe
        havens - The Albergue, a place of peace, hope and believe.
      </div>
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
    </section>
  );
};

export default BookDescription;
