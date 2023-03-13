import { TUser } from '@/types/user';
import getHeaders from '@/utils/getHeaders';
import responseHandle from '@/utils/responseHandle';

const baseUrl = `${import.meta.env.VITE_API_PATH}/user`;

export const currentUserFetch = async (): Promise<{ data: TUser }> => {
  const response = await fetch(baseUrl, {
    method: 'GET',
    headers: getHeaders(),
  });

  return responseHandle(response);
};
