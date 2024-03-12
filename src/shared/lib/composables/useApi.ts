import { defu } from 'defu';
import type { UseFetchOptions } from '#app';
import { useRuntimeConfig } from '#app';

export function useApi<T>(url: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig();

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.baseUrl,
    key: url,
  };

  const params = defu(options, defaults);

  return useFetch(url, params);
}
