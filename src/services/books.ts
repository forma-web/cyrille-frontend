import { baseQuery, baseQueryWithAuth } from 'shared/api';
import { TPagination, TResponse } from 'shared/types/api';
import { TBook, TBookResponse } from 'entities/Book';
import { TReview, TReviewValues } from 'entities/Review';
import { TChapterInfoResponse, TChapterResponse } from '@/types/chapter';

const baseUrl = `${import.meta.env.VITE_API_URL}books`;

export const allBooksFetch = async () =>
  baseQuery<TPagination<TBook>>(baseUrl, {
    method: 'GET',
  });

export const bookFetch = async (id: Id) =>
  baseQuery<TBookResponse>(`${baseUrl}/${id}`, {
    method: 'GET',
  });

export const reviewsBookFetch = async (
  id: Id,
  cursor: string | null = null,
) => {
  return baseQuery<TPagination<TReview>>(
    `${baseUrl}/${id}/reviews?cursor=${cursor}`,
    {
      method: 'GET',
    },
  );
};

export const createReviewBookFetch = async (id: Id, data: TReviewValues) => {
  return baseQueryWithAuth<TResponse<TReview>>(`${baseUrl}/${id}/reviews`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const allBookChaptersFetch = async (id: string | number) =>
  baseQueryWithAuth<TChapterInfoResponse>(`${baseUrl}/${id}/chapters`, {
    method: 'GET',
  });

export const bookChapterFetch = async (id: Id, chapterId: string | number) =>
  baseQueryWithAuth<TChapterResponse>(
    `${baseUrl}/${id}/chapters/${chapterId}`,
    {
      method: 'GET',
    },
  );
