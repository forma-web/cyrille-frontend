import styles from './Progress.module.scss';

const Progress = () => {
  return (
    <div className={styles.progress}>
      <span className={styles.progress__percent}>1%</span>
      <div className={styles.progress__bar}>
        <input type="range" step="any" className={styles.progress__input} />
      </div>
      <div className={styles.progress__chapter}>
        <span className={styles.chapter__name}>Chapter 1</span>
        <span className={styles.chapter__pages}>2 of 576</span>
      </div>
    </div>
  );
};

export default Progress;
