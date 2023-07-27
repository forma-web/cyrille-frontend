import { baseQueryWithAuth } from '@/shared/api';
import { getAuthApiPath } from '@/shared/consts/api';

export const confirmAuthEmailQuery = async (data: { code: string }) =>
  baseQueryWithAuth<void>(getAuthApiPath('check'), {
    method: 'POST',
    body: JSON.stringify(data),
  });
