import React, { useRef } from 'react';
import styles from './Layout.module.scss';
import cn from 'classnames';
import useSticky from '@/hooks/useSticky';

const Layout = ({ children }: { children?: React.ReactNode }) => (
  <div className={styles.layout}>{children}</div>
);

const LayoutHeader = ({
  children,
  white,
}: {
  children?: React.ReactNode;
  white?: boolean;
}) => {
  const headerTrigger = useRef<HTMLDivElement>(null);
  const { isSticky } = useSticky(headerTrigger);

  return (
    <>
      <div ref={headerTrigger} className="trigger"></div>
      <header
        className={cn(
          styles.header,
          isSticky && styles.header_sticky,
          white && styles.header_white,
        )}
      >
        <div className={styles.header__container}>{children}</div>
      </header>
    </>
  );
};

const LayoutMain = ({ children }: { children?: React.ReactNode }) => (
  <main className={styles.main}>{children}</main>
);

const LayoutFooter = ({ children }: { children?: React.ReactNode }) => {
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

Layout.Header = LayoutHeader;
Layout.Main = LayoutMain;
Layout.Footer = LayoutFooter;

export default Layout;
