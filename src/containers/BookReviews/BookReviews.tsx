import CyrContainer from '@/components/ui/CyrContainer/CyrContainer';
import styles from './BookReviews.module.scss';

type TBookReviewsProps = {
  bookId: number | string;
};

const BookReviews = ({ bookId }: TBookReviewsProps) => {
  // if (!artists?.length) return null;

  return (
    <CyrContainer className={styles.reviews}>
      <h4>reviews</h4>
      {/* <PersonList persons={artists} /> */}
    </CyrContainer>
  );
};

export default BookReviews;
