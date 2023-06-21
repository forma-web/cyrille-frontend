import { baseQueryWithAuth } from 'shared/api';
import { TChapterInfoResponse } from '../types';
import { getBooksApiPath } from 'shared/consts/api';

export const getAllBookChaptersQuery = async (id: Id) =>
  baseQueryWithAuth<TChapterInfoResponse>(getBooksApiPath(`${id}/chapters`), {
    method: 'GET',
  });
