import { Navigate, Outlet } from 'react-router-dom';
import { getRouteLogin } from 'shared/consts/routers';
import { jwt } from 'shared/lib';

export const RequiredAuth = () => {
  const isAuth = jwt.isJWTTokenExist();

  if (!isAuth) {
    return <Navigate to={getRouteLogin()} />;
  }

  return <Outlet />;
};
