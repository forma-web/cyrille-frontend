import { baseQuery, baseQueryWithAuth } from 'shared/api';
import { TPagination, TResponse } from '@/types/response';
import { TBook, TBookResponse } from '@/types/book';
import { TReview, TReviewValues } from '@/types/review';
import { TChapterInfoResponse, TChapterResponse } from '@/types/chapter';

const baseUrl = `${import.meta.env.VITE_API_URL}/books`;

export const allBooksFetch = async () =>
  baseQuery<TPagination<TBook>>(baseUrl, {
    method: 'GET',
  });

export const bookFetch = async (id: string | number) =>
  baseQuery<TBookResponse>(`${baseUrl}/${id}`, {
    method: 'GET',
  });

export const reviewsBookFetch = async (
  id: string | number,
  cursor: string | null = null,
) => {
  return baseQuery<TPagination<TReview>>(
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
  return baseQueryWithAuth<TResponse<TReview>>(`${baseUrl}/${id}/reviews`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const allBookChaptersFetch = async (id: string | number) =>
  baseQueryWithAuth<TChapterInfoResponse>(`${baseUrl}/${id}/chapters`, {
    method: 'GET',
  });

export const bookChapterFetch = async (
  id: string | number,
  chapterId: string | number,
) =>
  baseQueryWithAuth<TChapterResponse>(
    `${baseUrl}/${id}/chapters/${chapterId}`,
    {
      method: 'GET',
    },
  );
