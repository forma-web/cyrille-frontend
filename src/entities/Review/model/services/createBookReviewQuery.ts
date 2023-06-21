import { baseQueryWithAuth } from 'shared/api';
import { TReviewResponse, TReviewValues } from '../types';
import { getBooksApiPath } from 'shared/consts/api';

export const createBookReviewQuery = async (id: Id, data: TReviewValues) => {
  return baseQueryWithAuth<TReviewResponse>(getBooksApiPath(`${id}/reviews`), {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
