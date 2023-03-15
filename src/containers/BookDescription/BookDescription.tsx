import styles from './BookDescription.module.scss';

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
        <li className={styles.statistic__item}>
          <div className={styles.statistic__title}>Relesed</div>
          <div className={styles.statistic__value}>2022</div>
          <div className={styles.statistic__caption}>18 February</div>
        </li>
        <li className={styles.statistic__item}>
          <div className={styles.statistic__title}>Length</div>
          <div className={styles.statistic__value}>3</div>
          <div className={styles.statistic__caption}>pages</div>
        </li>
        <li className={styles.statistic__item}>
          <div className={styles.statistic__title}>Language</div>
          <div className={styles.statistic__value}>Eng</div>
          <div className={styles.statistic__caption}>english</div>
        </li>
      </ul>
    </section>
  );
};

export default BookDescription;
