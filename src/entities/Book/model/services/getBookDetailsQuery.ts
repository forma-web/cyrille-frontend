import { baseQuery } from 'shared/api';
import { TBookResponse } from '../types';
import { getBooksApiPath } from 'shared/consts/api';

export const getBookDetailsQuery = async (id: Id) =>
  baseQuery<TBookResponse>(getBooksApiPath(id), {
    method: 'GET',
  });
