import type { UseFetchOptions } from '#app';
import { useCookie } from '#app';
import { defu } from 'defu';
import type { ApiToken } from '@shared/types/api';
import { useApi } from '@shared/lib/composables/useApi';

export const useAuthApi = async <T>(
  url: string,
  options: UseFetchOptions<T> = {},
) => {
  const token = useCookie<ApiToken>('token');

  const defaults: UseFetchOptions<T> = {
    headers: token.value
      ? { Authorization: `Bearer ${token.value.token}` }
      : {},
  };

  const params = defu(options, defaults);

  return useApi(url, params);
};
