import { TRegisterValues } from '@/entities/Auth';
import { TUser } from '@/entities/User';
import { baseQueryWithAuth } from '@/shared/api';
import { getUserApiPath } from '@/shared/consts/api';

export const updateUserQuery = async (data: Partial<TRegisterValues>) => {
  return baseQueryWithAuth<{ data: TUser }>(getUserApiPath(), {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};
