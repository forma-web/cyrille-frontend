export const enum ERoutes {
  home = '/',
  auth = 'auth',
  profile = 'profile',
  login = 'login',
  register = 'sign-up',
}

export const LOGIN_ROUTE = `/${ERoutes.auth}/${ERoutes.login}`;
export const REGISTER_ROUTE = `/${ERoutes.auth}/${ERoutes.register}`;
