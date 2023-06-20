import { getAuthApiPath } from 'shared/consts/api';
import { baseQuery } from './baseQuery';
import { TMeta } from 'shared/types/api';

export const refreshTokenQuery = async (token: string) =>
  baseQuery<{ meta: TMeta }>(getAuthApiPath('refresh'), {
    method: 'POST',
    headers: {
      Authorization: token,
    },
  });
