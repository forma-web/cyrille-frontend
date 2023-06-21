import { baseQueryWithAuth } from 'shared/api';
import { getAuthApiPath } from 'shared/consts/api';

export const logoutUserQuery = async () =>
  baseQueryWithAuth<void>(getAuthApiPath('logout'), {
    method: 'POST',
  });
