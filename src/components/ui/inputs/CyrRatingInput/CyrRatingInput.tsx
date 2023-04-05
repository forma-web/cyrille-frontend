import React, { useId } from 'react';
import CyrRhombus from '@/components/ui/CyrRhombus/CyrRhombus';
import styles from './CyrRatingInput.module.scss';

type TCyrRatingInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  currentValue: string | null;
};

const CyrRatingInput = React.forwardRef<HTMLInputElement, TCyrRatingInputProps>(
  ({ currentValue, ...props }, ref) => {
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
                value={currentRating}
                {...props}
                ref={ref}
              />

              <CyrRhombus
                className={styles.star}
                filled={(Number(currentValue) ?? 0) >= currentRating ? 1 : 0}
              />
            </label>
          );
        })}
      </div>
    );
  },
);

CyrRatingInput.displayName = 'CyrRatingInput';

export default CyrRatingInput;
