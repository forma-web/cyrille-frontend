import CyrContainer from '@/components/ui/CyrContainer/CyrContainer';
import styles from './BookReviews.module.scss';
import ReviewForm from '@/containers/ReviewForm/ReviewForm';
import BookReviewsList from '@/containers/BookReviewsList/BookReviewsList';

type TBookReviewsProps = {
  bookId: number | string;
};

const BookReviews = ({ bookId }: TBookReviewsProps) => {
  return (
    <>
      <CyrContainer className={styles.reviews}>
        <h4>reviews</h4>
        <BookReviewsList bookId={bookId} />
      </CyrContainer>
      <CyrContainer className={styles.reviews}>
        <h4>rate this book</h4>
        <ReviewForm bookId={bookId} />
      </CyrContainer>
    </>
  );
};

export default BookReviews;
