import { TAuth, TLoginValues, TMeta, TRegisterValues } from '@/types/auth';
import { fetchData } from '@/utils/fetch';

const baseUrl = `${import.meta.env.VITE_API_PATH}/auth`;

const authFetch =
  <T>(url: string) =>
  async (body: T): Promise<TAuth> =>
    fetchData<TAuth>(`${baseUrl}/${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
    });

export const registerUser = authFetch<TRegisterValues>('register');
export const loginUser = authFetch<TLoginValues>('login');

export const refreshToken = async (token: string) =>
  fetchData<{ meta: TMeta }>(`${baseUrl}/refresh`, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
  });
