import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.scss';

const AuthLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
