import { Navigate, Outlet } from 'react-router-dom';
import { LOCAL_STORAGE_JWT } from '../constants/jwt';

const RequiredAuth = () => {
  const isAuth = !!localStorage.getItem(LOCAL_STORAGE_JWT);

  if (!isAuth) {
    return <Navigate to="/auth/login" />;
  }

  return <Outlet />;
};

export default RequiredAuth;
