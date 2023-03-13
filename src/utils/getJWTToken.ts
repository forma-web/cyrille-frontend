import { LOCAL_STORAGE_JWT } from '@/constants/jwt';

const getJWTToken = () => {
  const jwt = localStorage.getItem(LOCAL_STORAGE_JWT);

  return jwt;
};

export default getJWTToken;
