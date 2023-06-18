import { TUser } from '@/types/user';
import { baseQueryWithAuth } from 'shared/api';

const baseUrl = `${import.meta.env.VITE_API_URL}/user`;

export const currentUserFetch = async () =>
  baseQueryWithAuth<{ data: TUser }>(baseUrl, {
    method: 'GET',
  });
