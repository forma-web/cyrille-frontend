import { defu } from 'defu';
import type { ApiToken } from '@shared/types/api';
import { useApi } from '@shared/lib/composables/useApi';
import { useCookie } from '#app';
import type { UseFetchOptions } from '#app';

export async function useAuthApi<T>(url: string, options: UseFetchOptions<T> = {}) {
  const token = useCookie<ApiToken>('token');

  const defaults: UseFetchOptions<T> = {
    headers: token.value
      ? { Authorization: `Bearer ${token.value.token}` }
      : {},
  };

  const params = defu(options, defaults);

  return useApi(url, params);
}
