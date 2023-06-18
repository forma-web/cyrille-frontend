import { Navigate, Outlet } from 'react-router-dom';
import { jwt } from 'shared/lib';
import styles from './AuthLayout.module.scss';
import AuthHeader from '@/containers/AuthHeader/AuthHeader';

const AuthLayout = () => {
  const isAuth = jwt.isJWTTokenExist();

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
