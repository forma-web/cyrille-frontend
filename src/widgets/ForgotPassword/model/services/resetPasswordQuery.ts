import { baseQuery } from '@/shared/api';
import { getAuthApiPath } from '@/shared/consts/api';

export const resetPasswordQuery = (data: { email: string; password: string }) =>
  baseQuery<void>(getAuthApiPath('password', 'reset'), {
    method: 'POST',
    body: JSON.stringify(data),
  });
