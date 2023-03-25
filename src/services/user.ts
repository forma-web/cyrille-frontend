import { TUser } from '@/types/user';
import { fetchDataWithAuth } from '@/utils/fetch';

const baseUrl = `${import.meta.env.VITE_API_URL}/user`;

export const currentUserFetch = async () =>
  fetchDataWithAuth<{ data: TUser }>(baseUrl, {
    method: 'GET',
  });
