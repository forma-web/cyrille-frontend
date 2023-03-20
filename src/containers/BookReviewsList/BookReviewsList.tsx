import { reviewsBookFetch } from '@/services/books';
import ReviewList from '@/containers/ReviewList/ReviewList';
import CyrButton from '@/components/ui/CyrButton/CyrButton';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const BookReviewsList = ({ bookId }: { bookId: number | string }) => {
  const {
    fetchNextPage,
    hasNextPage,
    data: reviews,
  } = useInfiniteQuery({
    queryKey: ['reviews', String(bookId)],
    queryFn: ({ pageParam = null }) => reviewsBookFetch(bookId, pageParam),
    getNextPageParam: (lastPage) => lastPage.meta.next_cursor,
  });

  return (
    <>
      {reviews && reviews.pages[0].data.length > 0 ? (
        <ReviewList reviews={reviews} />
      ) : (
        'No reviews yet'
      )}
      {hasNextPage && (
        <CyrButton onClick={() => fetchNextPage()}>Show more</CyrButton>
      )}
    </>
  );
};

export default BookReviewsList;
