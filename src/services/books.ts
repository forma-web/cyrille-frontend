import { fetchData } from '@/utils/fetch';
import { TPagination } from '@/types/response';
import { TBook } from '@/types/book';

const baseUrl = `${import.meta.env.VITE_API_PATH}/books`;

export const allBooksFetch = async () =>
  fetchData<TPagination<TBook>>(baseUrl, {
    method: 'GET',
  });

export const bookFetch = async (id: string | number) =>
  fetchData<TBook>(`${baseUrl}/${id}`, {
    method: 'GET',
  });
