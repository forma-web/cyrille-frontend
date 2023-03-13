import { TAuth, TLoginValues, TRegisterValues } from '@/types/auth';
import getHeaders from '@/utils/getHeaders';
import responseHandle from '@/utils/responseHandle';

const baseUrl = `${import.meta.env.VITE_API_PATH}/auth`;

const authFetch =
  <T>(url: string) =>
  async (body: T): Promise<TAuth> => {
    const response = await fetch(`${baseUrl}/${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: getHeaders(),
    });

    return responseHandle(response);
  };

export const registerUser = authFetch<TRegisterValues>('register');
export const loginUser = authFetch<TLoginValues>('login');
