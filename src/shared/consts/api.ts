export const ApiConfig = {
  books: 'books',
  auth: 'auth',
  user: 'users',
} as const;

const createApiPath = (apiSectionPath?: Url) => {
  return (url?: Url) => [apiSectionPath, url].filter(Boolean).join('/');
};

export const getBooksApiPath = createApiPath(ApiConfig.books);
export const getAuthApiPath = createApiPath(ApiConfig.auth);
export const getUserApiPath = createApiPath(ApiConfig.user);
