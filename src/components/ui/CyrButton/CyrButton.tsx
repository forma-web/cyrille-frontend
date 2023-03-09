import React from 'react';
import styles from './CyrButton.module.scss';
import cn from 'classnames';

type TButtonProps = React.ButtonHTMLAttributes<HTMLElement> & {
  secondary?: boolean;
  className?: string;
};

const CyrButton = ({
  children,
  secondary = false,
  type = 'button',
  className,
  ...rest
}: TButtonProps) => {
  const classnames = cn(
    styles.button,
    secondary && styles.button_secondary,
    className
  );

  return (
    <button className={classnames} type={type} {...rest}>
      {children}
    </button>
  );
};

export default CyrButton;
