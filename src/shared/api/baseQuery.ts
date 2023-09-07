import { DEFAULT_HEADERS } from 'shared/consts/headers';

type TOptionsWithBaseUrl = RequestInit & {
  baseUrl?: string;
};

const fixUrl = function (url: string): string {
  if (url[url.length - 1] === '/') return url;
  return url + '/';
};

/**
 * Base query without authorization
 */
export const baseQuery = async <T>(
  url: Url,
  options?: TOptionsWithBaseUrl,
): Promise<T> => {
  const { headers: optionHeaders, baseUrl } = options ?? {};

  // Init headers
  const headers = { ...DEFAULT_HEADERS, ...optionHeaders };

  // Getting the url for the request
  const queryUrl = new URL(
    url,
    baseUrl ?? fixUrl(import.meta.env.VITE_API_URL),
  );

  // Fetching data
  const response = await fetch(queryUrl, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorMessage = await response.json();
    throw new Error(`${errorMessage.message}`);
  }

  switch (response.status) {
    case 204: {
      return Promise.resolve() as Promise<T>;
    }
    default: {
      return response.json() as Promise<T>;
    }
  }
};
