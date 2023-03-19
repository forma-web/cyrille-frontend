import React, { useId } from 'react';
import CyrRhombus from '@/components/ui/CyrRhombus/CyrRhombus';
import styles from './CyrRatingInput.module.scss';

type TCyrRatingInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const CyrRatingInput = ({ name }: TCyrRatingInputProps) => {
  const [rating, setRating] = React.useState<number | null>(null);
  const ratingId = useId();

  return (
    <div className={styles.ratingField}>
      {new Array(5).fill(0).map((_, index) => {
        const currentRating = index + 1;
        const starId = ratingId + `-${currentRating}`;

        return (
          <label htmlFor={starId} key={starId}>
            <input
              type="radio"
              id={starId}
              name={name}
              value={currentRating}
              onClick={() => setRating(() => currentRating)}
            />

            <CyrRhombus
              className={styles.star}
              filled={(rating ?? 0) >= currentRating ? 1 : 0}
            />
          </label>
        );
      })}
    </div>
  );
};

export default CyrRatingInput;
