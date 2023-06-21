import { baseQuery } from 'shared/api';
import { TBookListResponse } from '../types';
import { getBooksApiPath } from 'shared/consts/api';

export const getAllBooksQuery = async () =>
  baseQuery<TBookListResponse>(getBooksApiPath(), {
    method: 'GET',
  });
