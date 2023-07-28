import { baseQueryWithAuth } from '@/shared/api';
import { getUserApiPath } from '@/shared/consts/api';

export const verifyOldEmailQuery = async () =>
  baseQueryWithAuth<void>(getUserApiPath('email', 'verify'), {
    method: 'POST',
  });
