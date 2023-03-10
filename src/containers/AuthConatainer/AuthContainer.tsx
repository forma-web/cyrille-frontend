import { type } from 'os';
import React from 'react';
import styles from './AuthContainer.module.scss';

type FCWithChild = {
  children?: React.ReactNode;
};
type TAuthContainerProps = FCWithChild & {
  onSubmit?: (
    e?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined
  ) => Promise<void>;
};

const AuthContainer = ({ children, onSubmit }: TAuthContainerProps) => {
  return (
    <form className={styles.auth} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

AuthContainer.Form = ({ children }: FCWithChild) => (
  <div className={styles.auth__form}>{children}</div>
);

AuthContainer.Buttons = ({ children }: FCWithChild) => (
  <div className={styles.auth__buttons}>{children}</div>
);

AuthContainer.Footer = ({ children }: FCWithChild) => (
  <div className={styles.auth__footer}>{children}</div>
);

export default AuthContainer;
