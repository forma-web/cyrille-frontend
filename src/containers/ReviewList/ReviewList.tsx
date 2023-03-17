import { TReview } from '@/types/review';
import Review from '@/components/Review/Review';
import styles from './ReviewList.module.scss';

type TPersonListProps = {
  reviews: TReview[];
};

const ReviewList = ({ reviews }: TPersonListProps) => {
  if (!reviews?.length) return null;

  return (
    <ul className={styles.reviews}>
      {reviews.map((reviewData) => (
        <li className={styles.reviews__item} key={reviewData.id}>
          <Review {...reviewData} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
