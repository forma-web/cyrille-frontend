import CyrRhombus from '../CyrRhombus/CyrRhombus';
import styles from './CyrRating.module.scss';

type TCyrRatingProps = {
  rating: number | null;
  maxRating?: number;
  signature?: boolean;
};

const CyrRating = ({ rating, maxRating = 5, signature }: TCyrRatingProps) => {
  return (
    <div className={styles.rating}>
      <div className={styles.rating__container}>
        {new Array(Math.floor(maxRating)).fill(0).map((_, index) => {
          const filled = Math.min(1, Math.max(0, (rating ?? 0) - index));
          return <CyrRhombus key={index} width={1.6} filled={filled} />;
        })}
      </div>
      {signature && (
        <div className={styles.rating__signature}>
          {rating === null ? 'No rating' : `${rating.toFixed(1)} Rating`}
        </div>
      )}
    </div>
  );
};

export default CyrRating;
