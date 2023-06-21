import { JWT_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';
import { TMeta } from 'shared/types/api';
import { MILLISECONDS_IN_SECOND } from 'shared/consts/time';

/**
 * Set JWT Info to localstorage: token, token type and ttl (ms)
 */
const setJWTToken = ({ token, token_type, ttl }: TMeta) => {
  const jwtData = {
    ttl: Date.now() + ttl * MILLISECONDS_IN_SECOND,
    token: `${token_type} ${token}`,
  };
  localStorage.setItem(JWT_LOCALSTORAGE_KEY, JSON.stringify(jwtData));
};

/**
 * Get JWT token, token type and ttl from localstorage
 * return null if token is expired
 */
const getJWTData = (): TMeta | null => {
  const jwt = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
  if (!jwt) return null;

  return JSON.parse(jwt) as TMeta;
};

/**
 * Get JWT token from localstorage
 * return null if token is expired
 */
const getJWTToken = (): string | null => getJWTData()?.token ?? null;

/**
 * Check if JWT token is has
 * return false if token is not exist
 */
const isJWTTokenExist = (): boolean => {
  return !!getJWTToken();
};

/**
 * Remove JWT token from localstorage
 */
const removeJWTToken = (): void => {
  localStorage.removeItem(JWT_LOCALSTORAGE_KEY);
};

export const jwt = {
  setJWTToken,
  getJWTData,
  getJWTToken,
  removeJWTToken,
  isJWTTokenExist,
};
