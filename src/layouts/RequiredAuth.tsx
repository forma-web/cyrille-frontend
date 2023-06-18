import { Navigate, Outlet } from 'react-router-dom';
import { LOGIN_ROUTE } from '@/constants/routers';
import { jwt } from 'shared/lib';

const RequiredAuth = () => {
  const isAuth = jwt.isJWTTokenExist();

  if (!isAuth) {
    return <Navigate to={LOGIN_ROUTE} />;
  }

  return <Outlet />;
};

export default RequiredAuth;
