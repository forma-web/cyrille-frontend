import { DEFAULT_HEADERS } from 'shared/consts/headers';

/**
 * Base query without authorization
 */
export const baseQuery = async <T>(
  url: RequestInfo | URL,
  options?: RequestInit,
): Promise<T> => {
  const headers = { ...DEFAULT_HEADERS, ...options?.headers };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorMessage = await response.json();
    throw new Error(`${errorMessage.message}`);
  }

  return response.json();
};
