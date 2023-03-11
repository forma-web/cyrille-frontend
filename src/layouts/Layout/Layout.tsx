import React from 'react';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children?: React.ReactNode }) => (
  <div className={styles.wrapper}>{children}</div>
);

Layout.Header = ({ children }: { children?: React.ReactNode }) => (
  <header className={styles.header}>{children}</header>
);

Layout.Main = ({ children }: { children?: React.ReactNode }) => (
  <main className={styles.main}>{children}</main>
);

Layout.Footer = ({ children }: { children?: React.ReactNode }) => (
  <footer className={styles.footer}>{children}</footer>
);

export default Layout;
