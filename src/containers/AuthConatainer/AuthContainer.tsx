import React from 'react';
import styles from './AuthContainer.module.scss';

type FCWithChild = {
  children?: React.ReactNode;
};
type TAuthContainerProps = FCWithChild & {
  onSubmit?: (
    e?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined,
  ) => Promise<void>;
};

const AuthContainer = ({ children, onSubmit }: TAuthContainerProps) => {
  return (
    <form className={styles.auth} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

const AuthContainerForm = ({ children }: FCWithChild) => (
  <div className={styles.auth__form}>{children}</div>
);

const AuthContainerButtons = ({ children }: FCWithChild) => (
  <div className={styles.auth__buttons}>{children}</div>
);

const AuthContainerFooter = ({ children }: FCWithChild) => (
  <div className={styles.auth__footer}>{children}</div>
);

AuthContainer.Form = AuthContainerForm;
AuthContainer.Buttons = AuthContainerButtons;
AuthContainer.Footer = AuthContainerFooter;

export default AuthContainer;
