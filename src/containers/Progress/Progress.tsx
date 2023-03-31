import CyrRangeInput from '@/components/ui/inputs/CyrRangeInput/CyrRangeInput';
import styles from './Progress.module.scss';

type TProgessProps = {
  progress: number | null;
  currentPage: number | null;
  totalPages: number | null;
  nameChapter: string | null;
  progressChange: (value: number) => void;
};

const Progress = ({
  progress,
  currentPage,
  totalPages,
  nameChapter,
  progressChange,
}: TProgessProps) => {
  return (
    <div className={styles.progress}>
      <span className={styles.progress__percent}>
        {progress !== null &&
          `${Math.min(Math.max(progress, 0), 100).toFixed(1)}%`}
      </span>
      <div className={styles.progress__bar}>
        {progress !== null && (
          <CyrRangeInput defaultValue={progress} onChange={progressChange} />
        )}
      </div>
      <div className={styles.progress__chapter}>
        <span className={styles.chapter__name}>{nameChapter}</span>
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
