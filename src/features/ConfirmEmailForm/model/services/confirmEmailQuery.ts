import { baseQueryWithAuth } from '@/shared/api';
import { getAuthApiPath } from '@/shared/consts/api';
import { TConfirmEmailValues } from '../types';

export const confirmEmailQuery = async (data: TConfirmEmailValues) =>
  baseQueryWithAuth<void>(getAuthApiPath('check'), {
    method: 'POST',
    body: JSON.stringify(data),
  });
