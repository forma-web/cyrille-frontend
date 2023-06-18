import { baseQuery } from './baseQuery';
import { TMeta } from 'shared/types/api';

// TODO: refactor this
const REMOVE_THIS_URL_AND_MAKE_RIGHT_DEPENDENCY = `${
  import.meta.env.VITE_API_URL
}/auth`;

export const refreshTokenQuery = async (token: string) =>
  baseQuery<{ meta: TMeta }>(
    `${REMOVE_THIS_URL_AND_MAKE_RIGHT_DEPENDENCY}/refresh`,
    {
      method: 'POST',
      headers: {
        Authorization: token,
      },
    },
  );
