import CyrRangeInput from '@/components/ui/inputs/CyrRangeInput/CyrRangeInput';
import styles from './Progress.module.scss';

type TProgessProps = {
  progress: number | null;
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
  return (
    <div className={styles.progress}>
      <span className={styles.progress__percent}>
        {progress !== null &&
          `${Math.min(Math.max(progress, 0), 100).toFixed(1)}%`}
      </span>
      <div className={styles.progress__bar}>
        {progress !== null && (
          <CyrRangeInput currentValue={progress} step={totalStep} />
        )}
      </div>
      <div className={styles.progress__chapter}>
        {progress !== null && (
          <>
            <span className={styles.chapter__name}>Chapter 1</span>
            <span className={styles.chapter__pages}>
              {currentPage !== null &&
                totalPages !== null &&
                `${currentPage} of ${totalPages}`}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Progress;
