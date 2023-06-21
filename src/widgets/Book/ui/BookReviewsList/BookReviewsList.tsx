import { ReviewList, getBookReviewsQuery } from 'entities/Review';
import { CyrButton } from 'shared/ui';
import { useInfiniteQuery } from '@tanstack/react-query';

export const BookReviewsList = ({ bookId }: { bookId: number | string }) => {
  const {
    fetchNextPage,
    hasNextPage,
    data: reviews,
  } = useInfiniteQuery({
    queryKey: ['reviews', String(bookId)],
    queryFn: ({ pageParam = null }) =>
      getBookReviewsQuery(String(bookId), pageParam),
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
