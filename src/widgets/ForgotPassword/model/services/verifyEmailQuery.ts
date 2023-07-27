import { baseQuery } from '@/shared/api';
import { getAuthApiPath } from '@/shared/consts/api';

export const verifyEmailQuery = (email: string) =>
  baseQuery<void>(getAuthApiPath('password', 'verify'), {
    method: 'POST',
    body: JSON.stringify({
      email,
    }),
  });
