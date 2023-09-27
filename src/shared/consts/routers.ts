export const AppRoutes = {
  home: 'home',
  auth: 'auth',
  profile: 'profile',
  books: 'books',
  login: 'login',
  register: 'sign-up',
  forgotPassword: 'forgot-password',
  reader: 'reader',
  changeName: 'change-name',
  changeEmail: 'change-email',
  changePassword: 'change-password',
  payment: 'payment',
} as const;

export const getRouteHome = () => '/';
export const getRouteProfile = () => `/${AppRoutes.profile}`;
export const getRouteBookDetails = (id: Id) => `/${AppRoutes.books}/${id}`;
export const getRouteBookReader = (id: Id) => `/${AppRoutes.reader}/${id}`;
export const getRouteLogin = () => `/${AppRoutes.auth}/${AppRoutes.login}`;
export const getRouteRegister = () =>
  `/${AppRoutes.auth}/${AppRoutes.register}`;
export const getRouteProfileChangeName = () =>
  `/${AppRoutes.profile}/${AppRoutes.changeName}`;
export const getRouteProfileChangeEmail = () =>
  `/${AppRoutes.profile}/${AppRoutes.changeEmail}`;
export const getRouteProfileChangePassword = () =>
  `/${AppRoutes.profile}/${AppRoutes.changePassword}`;
export const getRouteForgotPassword = () =>
  `/${AppRoutes.auth}/${AppRoutes.forgotPassword}`;
export const getRoutePayment = () =>
  `/${AppRoutes.profile}/${AppRoutes.payment}`;

export const routeBookDetailsWithBookId = getRouteBookDetails(':bookId');
export const routeBookReaderWithBookId = getRouteBookReader(':bookId');
