import CyrContainer from '@/components/ui/CyrContainer/CyrContainer';
import { useQuery } from '@tanstack/react-query';
import { reviewsBookFetch } from '@/services/books';
import ReviewList from '../ReviewList/ReviewList';
import styles from './BookReviews.module.scss';

type TBookReviewsProps = {
  bookId: number | string;
};

const BookReviews = ({ bookId }: TBookReviewsProps) => {
  // if (!artists?.length) return null;
  const { isLoading, data: reviews } = useQuery({
    queryKey: ['reviews', bookId],
    queryFn: () => reviewsBookFetch(bookId!),
  });

  if (isLoading || !reviews) return null;

  return (
    <CyrContainer className={styles.reviews}>
      <h4>reviews</h4>
      <ReviewList reviews={reviews.data} />
    </CyrContainer>
  );
};

export default BookReviews;
