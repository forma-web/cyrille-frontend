import React from 'react';
import Header from '@/components/Header/Header';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Layout;
