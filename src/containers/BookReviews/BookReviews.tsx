import CyrContainer from '@/components/ui/CyrContainer/CyrContainer';
import ReviewForm from '@/containers/ReviewForm/ReviewForm';
import BookReviewsList from '@/containers/BookReviewsList/BookReviewsList';

type TBookReviewsProps = {
  bookId: number | string;
};

const BookReviews = ({ bookId }: TBookReviewsProps) => {
  return (
    <>
      <CyrContainer>
        <h4>reviews</h4>
        <BookReviewsList bookId={bookId} />
      </CyrContainer>
      <CyrContainer>
        <h4>rate this book</h4>
        <ReviewForm bookId={bookId} />
      </CyrContainer>
    </>
  );
};

export default BookReviews;
