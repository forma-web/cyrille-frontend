import React, { useRef } from 'react';
import styles from './Layout.module.scss';
import cn from 'classnames';
import { useSticky } from 'shared/lib';

const LayoutHeader = ({
  children,
  white,
  sticky,
}: {
  children?: React.ReactNode;
  white?: boolean;
  sticky?: boolean;
}) => {
  const headerTrigger = useRef<HTMLDivElement>(null);
  const { isSticky } = useSticky(headerTrigger);

  return (
    <>
      <div ref={headerTrigger} className="trigger"></div>
      <header
        className={cn(
          styles.header,
          (sticky || isSticky) && styles.header_sticky,
          white && styles.header_white,
        )}
      >
        <div className={styles.header__container}>{children}</div>
      </header>
    </>
  );
};

const LayoutMain = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <main className={cn(styles.main, className)}>
    {children}
    <div id="modal-main" />
  </main>
);

const LayoutFooter = ({
  children,
  sticky,
}: {
  children?: React.ReactNode;
  sticky?: boolean;
}) => {
  const footerTrigger = useRef<HTMLDivElement>(null);
  const { isSticky } = useSticky(footerTrigger);

  return (
    <>
      <footer
        className={cn(
          styles.footer,
          (sticky || isSticky) && styles.footer_sticky,
        )}
      >
        <div className={styles.footer__container}>{children}</div>
      </footer>
      <div ref={footerTrigger} className="trigger"></div>
    </>
  );
};

export const Layout = ({ children }: { children?: React.ReactNode }) => (
  <div className={styles.layout}>
    {children}
    <div id="modal-layout" />
  </div>
);

Layout.Header = LayoutHeader;
Layout.Main = LayoutMain;
Layout.Footer = LayoutFooter;
