import { Navigate, Outlet } from 'react-router-dom';
import { LOCAL_STORAGE_JWT } from '@/constants/jwt';
import { LOGIN_ROUTE } from '@/constants/routers';

const RequiredAuth = () => {
  const isAuth = !!localStorage.getItem(LOCAL_STORAGE_JWT);

  if (!isAuth) {
    return <Navigate to={LOGIN_ROUTE} />;
  }

  return <Outlet />;
};

export default RequiredAuth;
