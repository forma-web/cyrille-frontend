import { TAuth, TLoginValues, TRegisterValues } from '@/types/auth';
import { baseQuery, baseQueryWithAuth } from 'shared/api';

const baseUrl = `${import.meta.env.VITE_API_URL}/auth`;

const authFetch =
  <T>(url: string) =>
  async (body: T): Promise<TAuth> =>
    baseQuery<TAuth>(`${baseUrl}/${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
    });

export const registerUser = authFetch<TRegisterValues>('register');
export const loginUser = authFetch<TLoginValues>('login');

export const logoutUser = async () =>
  baseQueryWithAuth<void>(`${baseUrl}/logout`, {
    method: 'POST',
  });
