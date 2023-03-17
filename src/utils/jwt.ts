import { LOCAL_STORAGE_JWT } from '@/constants/jwt';
import { TMeta } from '@/types/auth';

export const setJWTToken = ({ token, token_type, ttl }: TMeta) => {
  const jwtData = {
    ttl: Date.now() + ttl * 1000,
    token: `${token_type} ${token}`,
  };
  localStorage.setItem(LOCAL_STORAGE_JWT, JSON.stringify(jwtData));
};

export const getJWTData = () => {
  const jwt = localStorage.getItem(LOCAL_STORAGE_JWT);
  if (!jwt) return null;

  return JSON.parse(jwt) as TMeta;
};

export const getJWTToken = () => getJWTData()?.token;

export const removeJWTToken = () => {
  localStorage.removeItem(LOCAL_STORAGE_JWT);
};
