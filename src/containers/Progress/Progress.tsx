import CyrRangeInput from '@/components/ui/inputs/CyrRangeInput/CyrRangeInput';
import styles from './Progress.module.scss';

type TProgessProps = {
  progress: number;
  totalStep: number | null;
  currentPage: number | null;
  totalPages: number | null;
};

const Progress = ({
  progress,
  currentPage,
  totalPages,
  totalStep,
}: TProgessProps) => {
  if (progress === null) return null;

  return (
    <div className={styles.progress}>
      {progress !== null && (
        <span className={styles.progress__percent}>{`${Math.min(
          Math.max(progress, 0),
          100,
        ).toFixed(1)}%`}</span>
      )}
      <div className={styles.progress__bar}>
        <CyrRangeInput currentValue={progress} step={totalStep} />
      </div>
      <div className={styles.progress__chapter}>
        <span className={styles.chapter__name}>Chapter 1</span>
        <span className={styles.chapter__pages}>
          {currentPage !== null &&
            totalPages !== null &&
            `${currentPage} of ${totalPages}`}
        </span>
      </div>
    </div>
  );
};

export default Progress;
