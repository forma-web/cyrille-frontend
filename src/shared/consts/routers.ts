export const AppRoutes = {
  home: 'home',
  auth: 'auth',
  profile: 'profile',
  books: 'books',
  login: 'login',
  register: 'sign-up',
  forgotPassword: 'forgot-password',
  reader: 'reader',
} as const;

export const getRouteHome = () => '/';
export const getRouteProfile = () => `/${AppRoutes.profile}`;
export const getRouteBookDetails = (id: Id) => `/${AppRoutes.books}/${id}`;
export const getRouteBookReader = (id: Id) => `/${AppRoutes.reader}/${id}`;
export const getRouteLogin = () => `/${AppRoutes.auth}/${AppRoutes.login}`;
export const getRouteRegister = () =>
  `/${AppRoutes.auth}/${AppRoutes.register}`;
export const getRouteForgotPassword = () =>
  `/${AppRoutes.auth}/${AppRoutes.forgotPassword}`;

export const routeBookDetailsWithBookId = getRouteBookDetails(':bookId');
export const routeBookReaderWithBookId = getRouteBookReader(':bookId');
