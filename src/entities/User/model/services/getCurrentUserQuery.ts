import { baseQueryWithAuth } from 'shared/api';
import { TUser } from '../types';
import { getUserApiPath } from 'shared/consts/api';

export const getCurrentUserQuery = async () =>
  baseQueryWithAuth<{ data: TUser }>(getUserApiPath(), {
    method: 'GET',
  });
