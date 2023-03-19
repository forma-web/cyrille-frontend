import CyrContainer from '@/components/ui/CyrContainer/CyrContainer';
import { useQuery } from '@tanstack/react-query';
import { reviewsBookFetch } from '@/services/books';
import ReviewList from '../ReviewList/ReviewList';
import styles from './BookReviews.module.scss';
import ReviewForm from '@/containers/ReviewForm/ReviewForm';

type TBookReviewsProps = {
  bookId: number | string;
};

const BookReviews = ({ bookId }: TBookReviewsProps) => {
  const { isLoading, data: reviews } = useQuery({
    queryKey: ['reviews', String(bookId)],
    queryFn: () => reviewsBookFetch(bookId!),
  });

  if (isLoading || !reviews) return null;

  return (
    <>
      <CyrContainer className={styles.reviews}>
        <h4>reviews</h4>
        {reviews.data.length > 0 ? (
          <ReviewList reviews={reviews.data} />
        ) : (
          'No reviews yet'
        )}
      </CyrContainer>
      <CyrContainer className={styles.reviews}>
        <h4>rate this book</h4>
        <ReviewForm bookId={bookId} />
      </CyrContainer>
    </>
  );
};

export default BookReviews;
