import { Navigate, Outlet } from 'react-router-dom';
import { LOCAL_STORAGE_JWT } from '@/constants/jwt';
import styles from './AuthLayout.module.scss';
import AuthHeader from '@/containers/AuthHeader/AuthHeader';

const AuthLayout = () => {
  const isAuth = !!localStorage.getItem(LOCAL_STORAGE_JWT);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <AuthHeader />
      </div>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
