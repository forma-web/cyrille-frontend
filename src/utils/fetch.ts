import { defaultHeaders } from '@/constants/api';
import { refreshToken } from '@/services/auth';
import { LOGIN_ROUTE } from '@/constants/routers';
import { getJWTData, getJWTToken, removeJWTToken, setJWTToken } from './jwt';

export const fetchData = async <T>(
  url: RequestInfo | URL,
  options?: RequestInit,
): Promise<T> => {
  const response = await fetch(url, {
    ...options,
    headers: { ...defaultHeaders, ...options?.headers },
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  return response.json();
};

export const fetchDataWithAuth = async <T>(
  url: RequestInfo | URL,
  options?: RequestInit,
): Promise<T> => {
  const tokenData = getJWTData();

  if (!tokenData) {
    window.location.replace(LOGIN_ROUTE);
    throw new Error('Token error');
  }

  const headers: HeadersInit = {
    ...defaultHeaders,
    ...options?.headers,
  };

  const { token, ttl } = tokenData;

  if (ttl < Date.now()) {
    try {
      const newToken = await refreshToken(token);
      setJWTToken(newToken.meta);
    } catch {
      removeJWTToken();
      window.location.replace(LOGIN_ROUTE);
      throw new Error('Refresh token error');
    }
  }

  (headers as Record<string, string>).Authorization = getJWTToken() ?? '';

  return fetchData<T>(url, { ...options, headers });
};
