import { TAuth, TLoginValues, TRegisterValues } from '@/types/auth';

const baseUrl = `${''}/auth`;

const authFetch =
  <T>(url: string) =>
  async (body: T): Promise<TAuth> => {
    const response = await fetch(`${baseUrl}/${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();

    // return responseHandle(response);
  };

export const registerUser = authFetch<TRegisterValues>('register');
export const loginUser = authFetch<TLoginValues>('login');

// export const currentUserFetch = async (): Promise<{ data: TUser }> => {
//   const response = await fetch(`${baseUrl}/me`, {
//     method: 'GET',
//     headers: getHeaders(),
//   });

//   return responseHandle(response);
// };
