import React, { PropsWithChildren } from 'react';
import styles from './AuthContainer.module.scss';

type TAuthContainerProps = PropsWithChildren & {
  onSubmit?: (
    e?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined,
  ) => Promise<void>;
};

export const AuthContainer = ({ children, onSubmit }: TAuthContainerProps) => {
  return (
    <form className={styles.auth} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

const AuthContainerForm = ({ children }: PropsWithChildren) => (
  <div className={styles.auth__form}>{children}</div>
);

const AuthContainerButtons = ({ children }: PropsWithChildren) => (
  <div className={styles.auth__buttons}>{children}</div>
);

const AuthContainerFooter = ({ children }: PropsWithChildren) => (
  <div className={styles.auth__footer}>{children}</div>
);

AuthContainer.Form = AuthContainerForm;
AuthContainer.Buttons = AuthContainerButtons;
AuthContainer.Footer = AuthContainerFooter;
