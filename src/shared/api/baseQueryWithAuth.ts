import { jwt } from 'shared/lib';
import { baseQuery } from './baseQuery';
import { LOGIN_ROUTE } from '@/constants/routers';
import { refreshTokenQuery } from './refreshTokenQuery';

const errorWithRedirectLoginPage = (message = '') => {
  window.location.replace(LOGIN_ROUTE);
  return new Error(message);
};

/**
 * Query function with authutation
 * if token is expired, it will be refreshed
 * if token is not, user will be redirected to login page
 */
export const baseQueryWithAuth = async <T>(
  url: RequestInfo | URL,
  options?: RequestInit,
): Promise<T> => {
  const tokenData = jwt.getJWTData();

  if (tokenData === null) {
    throw errorWithRedirectLoginPage('Token error');
  }

  const { token, ttl } = tokenData;

  if (ttl < Date.now()) {
    try {
      const newToken = await refreshTokenQuery(token);
      jwt.setJWTToken(newToken.meta);
    } catch {
      jwt.removeJWTToken();
      throw errorWithRedirectLoginPage('Refresh token error');
    }
  }

  const headers: HeadersInit = {
    ...options?.headers,
    Authorization: jwt.getJWTToken() ?? '',
  };

  return baseQuery<T>(url, {
    ...options,
    headers,
  });
};
