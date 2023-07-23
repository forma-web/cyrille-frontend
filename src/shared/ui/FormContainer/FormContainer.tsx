import React, { PropsWithChildren } from 'react';
import styles from './FormContainer.module.scss';

type TFormContainerProps = PropsWithChildren & {
  onSubmit?: (
    e?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined,
  ) => Promise<void>;
};

export const FormContainer = ({ children, onSubmit }: TFormContainerProps) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

const FormContainerContent = ({ children }: PropsWithChildren) => (
  <div className={styles.form__content}>{children}</div>
);

const FormContainerButtons = ({ children }: PropsWithChildren) => (
  <div className={styles.form__buttons}>{children}</div>
);

const FormContainerFooter = ({ children }: PropsWithChildren) => (
  <div className={styles.form__footer}>{children}</div>
);

FormContainer.Content = FormContainerContent;
FormContainer.Buttons = FormContainerButtons;
FormContainer.Footer = FormContainerFooter;
