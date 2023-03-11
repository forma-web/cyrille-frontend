import React, { useEffect, useRef, useState } from 'react';
import styles from './Layout.module.scss';
import cn from 'classnames';
import useSticky from '@/hooks/useSticky';

const Layout = ({ children }: { children?: React.ReactNode }) => (
  <div className={styles.layout}>{children}</div>
);

Layout.Header = ({ children }: { children?: React.ReactNode }) => {
  const headerTrigger = useRef<HTMLDivElement>(null);
  const { isSticky } = useSticky(headerTrigger);

  return (
    <>
      <div ref={headerTrigger} className="trigger"></div>
      <header className={cn(styles.header, isSticky && styles.header_sticky)}>
        <div className={styles.header__container}>{children}</div>
      </header>
    </>
  );
};

Layout.Main = ({ children }: { children?: React.ReactNode }) => (
  <main className={styles.main}>{children}</main>
);

Layout.Footer = ({ children }: { children?: React.ReactNode }) => {
  const footerTrigger = useRef<HTMLDivElement>(null);
  const { isSticky } = useSticky(footerTrigger);

  return (
    <>
      <footer className={cn(styles.footer, isSticky && styles.footer_sticky)}>
        <div className={styles.footer__container}>{children}</div>
      </footer>
      <div ref={footerTrigger} className="trigger"></div>
    </>
  );
};

export default Layout;
