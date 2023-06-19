import { CyrContainer } from 'shared/ui';
import { ReviewForm } from 'features/ReviewForm';
import { BookReviewsList } from '../BookReviewsList/BookReviewsList';

type TBookReviewsProps = {
  bookId: number | string;
};

export const BookReviews = ({ bookId }: TBookReviewsProps) => {
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
