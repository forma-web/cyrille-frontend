import styles from './CyrButton.module.scss';
import cn from 'classnames';

type TButtonProps = React.ButtonHTMLAttributes<HTMLElement> & {
  secondary?: boolean;
  icon?: boolean;
  className?: string;
};

export const CyrButton = ({
  children,
  secondary = false,
  icon = false,
  type = 'button',
  className,
  ...rest
}: TButtonProps) => {
  const classnames = cn(
    styles.button,
    secondary && styles.button_secondary,
    icon && styles.button_icon,
    className,
  );

  return (
    <button className={classnames} type={type} {...rest}>
      {children}
    </button>
  );
};
