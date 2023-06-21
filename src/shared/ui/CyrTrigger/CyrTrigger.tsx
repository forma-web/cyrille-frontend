import { TTriggerProps } from 'shared/types/trigger';
import styles from './CyrTrigger.module.scss';

export const CyrTrigger = ({
  isActive = false,
  onClick,
  renderIcon,
  children,
}: TTriggerProps) => {
  const icon = renderIcon ? renderIcon(isActive) : null;

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onClick && onClick();
  };

  return (
    <span className={styles.trigger} onClick={handleClick}>
      {icon}
      {children}
    </span>
  );
};
