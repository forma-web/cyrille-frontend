import { AppRoutes } from 'shared/consts/routers';

export const LOGIN_ROUTE = `/${AppRoutes.auth}/${AppRoutes.login}`;
export const REGISTER_ROUTE = `/${AppRoutes.auth}/${AppRoutes.register}`;
export const BOOK_ROUTE = `/${AppRoutes.books}/:bookId`;
export const READER_ROUTE = `/${AppRoutes.reader}/:bookId`;
