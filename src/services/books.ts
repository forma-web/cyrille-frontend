import { fetchData } from '@/utils/fetch';
import { TPagination } from '@/types/response';
import { TBook, TBookResponse } from '@/types/book';
import { TReview } from '@/types/review';

const baseUrl = `${import.meta.env.VITE_API_PATH}/books`;

export const allBooksFetch = async () =>
  fetchData<TPagination<TBook>>(baseUrl, {
    method: 'GET',
  });

export const bookFetch = async (id: string | number) =>
  fetchData<TBookResponse>(`${baseUrl}/${id}`, {
    method: 'GET',
  });

export const reviewsBookFetch = async (id: string | number) => {
  return fetchData<TPagination<TReview>>(`${baseUrl}/${id}/reviews`, {
    method: 'GET',
  });
};
