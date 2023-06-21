import { baseQuery } from 'shared/api';
import { TReviewListResponse } from '../types';
import { getBooksApiPath } from 'shared/consts/api';

export const getBookReviewsQuery = async (
  id: Id,
  cursor: string | null = null,
) => {
  return baseQuery<TReviewListResponse>(
    getBooksApiPath(`${id}/reviews?cursor=${cursor}`),
    {
      method: 'GET',
    },
  );
};
