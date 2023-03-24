export const enum ERoutes {
  home = '/',
  auth = 'auth',
  profile = 'profile',
  books = 'books',
  login = 'login',
  register = 'sign-up',
  reader = 'reader',
}

export const LOGIN_ROUTE = `/${ERoutes.auth}/${ERoutes.login}`;
export const REGISTER_ROUTE = `/${ERoutes.auth}/${ERoutes.register}`;
export const BOOK_ROUTE = `/${ERoutes.books}/:bookId`;
