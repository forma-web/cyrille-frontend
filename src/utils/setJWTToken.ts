import { TMeta } from '@/types/auth';
import { LOCAL_STORAGE_JWT, LOCAL_STORAGE_JWT_TTL } from '@/constants/jwt';

const setJWTToken = ({ token, token_type, ttl }: TMeta) => {
  const jwtToken = `${token_type} ${token}`;
  const refreshTokenTime = new Date().getTime() + ttl * 1000;

  localStorage.setItem(LOCAL_STORAGE_JWT, jwtToken);
  localStorage.setItem(LOCAL_STORAGE_JWT_TTL, String(refreshTokenTime));
};

export default setJWTToken;
