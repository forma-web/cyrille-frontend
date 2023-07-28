import { baseQueryWithAuth } from '@/shared/api';
import { getUserApiPath } from '@/shared/consts/api';

export const checkOldEmailQuery = async (data: { code: string }) =>
  baseQueryWithAuth<void>(getUserApiPath('email', 'check'), {
    method: 'POST',
    body: JSON.stringify(data),
  });
