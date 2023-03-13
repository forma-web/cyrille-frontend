import getJWTToken from './getJWTToken';

const getHeaders = ({ includeJWT } = { includeJWT: true }) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  if (includeJWT) {
    headers.Authorization = getJWTToken() ?? '';
  }

  return headers;
};

export default getHeaders;
