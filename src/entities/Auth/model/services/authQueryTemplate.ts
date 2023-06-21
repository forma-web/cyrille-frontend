import { baseQuery } from 'shared/api';
import { TAuth } from '../types';
import { getAuthApiPath } from 'shared/consts/api';

export const authQueryTemplate =
  <T>(url: string) =>
  async (body: T): Promise<TAuth> =>
    baseQuery<TAuth>(getAuthApiPath(url), {
      method: 'POST',
      body: JSON.stringify(body),
    });
