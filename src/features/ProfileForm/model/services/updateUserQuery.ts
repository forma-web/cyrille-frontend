import { TUser } from '@/entities/User';
import { baseQueryWithAuth } from '@/shared/api';
import { getUserApiPath } from '@/shared/consts/api';
import {
  TChangeNameValues,
  TChangePasswordValues,
  TChangeEmailValues,
} from '../types';

export const updateUserQuery = async (
  data: TChangePasswordValues | TChangeNameValues | TChangeEmailValues,
) => {
  return baseQueryWithAuth<{ data: TUser }>(getUserApiPath(), {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};
