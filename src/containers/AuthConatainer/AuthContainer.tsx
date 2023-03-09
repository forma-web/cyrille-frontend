import React from 'react';
import styles from './AuthContainer.module.scss';

type TAuthContainer = {
  children?: React.ReactNode;
};

const AuthContainer = ({ children }: TAuthContainer) => {
  return <div className={styles.auth}>{children}</div>;
};

AuthContainer.Form = ({ children }: TAuthContainer) => (
  <div className={styles.auth__form}>{children}</div>
);

AuthContainer.Buttons = ({ children }: TAuthContainer) => (
  <div className={styles.auth__buttons}>{children}</div>
);

AuthContainer.Footer = ({ children }: TAuthContainer) => (
  <div className={styles.auth__footer}>{children}</div>
);

export default AuthContainer;
