import type { UseFetchOptions } from '#app';
import { defu } from 'defu';
import { useRuntimeConfig } from '#app';

export const useApi = <T>(url: string, options: UseFetchOptions<T> = {}) => {
  const config = useRuntimeConfig();

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.baseUrl,
    key: url,
  };

  const params = defu(options, defaults);

  return useFetch(url, params);
};
