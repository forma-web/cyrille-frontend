import CyrRhombus from '../ui/CyrRhombus/CyrRhombus';
import styles from './CyrRating.module.scss';

type TCyrRatingProps = {
  rating: number;
  maxRating?: number;
  signature?: boolean;
};

const CyrRating = ({ rating, maxRating = 5, signature }: TCyrRatingProps) => {
  return (
    <div className={styles.rating}>
      <div className={styles.rating__container}>
        {new Array(Math.floor(maxRating)).fill(0).map((_, index) => {
          const filled = Math.min(1, Math.max(0, rating - index));
          return <CyrRhombus key={index} width={1.6} filled={filled} />;
        })}
      </div>
      {signature && (
        <div className={styles.rating__signature}>{rating} Rating</div>
      )}
    </div>
  );
};

export default CyrRating;
