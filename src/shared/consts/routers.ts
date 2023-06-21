export const AppRoutes = {
  home: 'home',
  auth: 'auth',
  profile: 'profile',
  books: 'books',
  login: 'login',
  register: 'sign-up',
  reader: 'reader',
} as const;

export const getRouteHome = () => '/';
export const getRouteProfile = () => `/${AppRoutes.profile}`;
export const getRouteBookDetails = (id: Id) => `/${AppRoutes.books}/${id}`;
export const getRouteBookReader = (id: Id) => `/${AppRoutes.reader}/${id}`;
export const getRouteLogin = () => `/${AppRoutes.auth}/${AppRoutes.login}`;
export const getRouterRegister = () =>
  `/${AppRoutes.auth}/${AppRoutes.register}`;

export const routeBookDetailsWithBookId = getRouteBookDetails(':bookId');
export const routeBookReaderWithBookId = getRouteBookReader(':bookId');
