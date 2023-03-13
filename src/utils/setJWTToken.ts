import { TMeta } from '@/types/auth';
import { LOCAL_STORAGE_JWT } from '@/constants/jwt';

const setJWTToken = ({ token, token_type }: TMeta) => {
  const jwtToken = `${token_type} ${token}`;
  localStorage.setItem(LOCAL_STORAGE_JWT, jwtToken);
};

export default setJWTToken;
