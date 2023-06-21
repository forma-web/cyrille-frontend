import { baseQueryWithAuth } from 'shared/api';
import { TChapterResponse } from '../types';
import { getBooksApiPath } from 'shared/consts/api';

export const getBookChapterQuery = async (id: Id, chapterId: Id) =>
  baseQueryWithAuth<TChapterResponse>(
    getBooksApiPath(`${id}/chapters/${chapterId}`),
    {
      method: 'GET',
    },
  );
