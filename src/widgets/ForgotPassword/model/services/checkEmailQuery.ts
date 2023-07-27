import { baseQuery } from '@/shared/api';
import { getAuthApiPath } from '@/shared/consts/api';

export const checkEmailQuery = async (data: { code: string; email: string }) =>
  baseQuery<void>(getAuthApiPath('password', 'check'), {
    method: 'POST',
    body: JSON.stringify(data),
  });
