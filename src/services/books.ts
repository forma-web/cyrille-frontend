import { fetchData, fetchDataWithAuth } from '@/utils/fetch';
import { TPagination, TResponse } from '@/types/response';
import { TBook, TBookResponse } from '@/types/book';
import { TReview, TReviewValues } from '@/types/review';

const baseUrl = `${import.meta.env.VITE_API_PATH}/books`;

export const allBooksFetch = async () =>
  fetchData<TPagination<TBook>>(baseUrl, {
    method: 'GET',
  });

export const bookFetch = async (id: string | number) =>
  fetchData<TBookResponse>(`${baseUrl}/${id}`, {
    method: 'GET',
  });

export const reviewsBookFetch = async (
  id: string | number,
  cursor: string | null = null,
) => {
  return fetchData<TPagination<TReview>>(
    `${baseUrl}/${id}/reviews?cursor=${cursor}`,
    {
      method: 'GET',
    },
  );
};

export const createReviewBookFetch = async (
  id: string | number,
  data: TReviewValues,
) => {
  return fetchDataWithAuth<TResponse<TReview>>(`${baseUrl}/${id}/reviews`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
