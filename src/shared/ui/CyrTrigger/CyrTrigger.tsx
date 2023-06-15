import { TCyrTriggerProps } from '@/types/trigger';
import styles from './CyrTrigger.module.scss';

export const CyrTrigger = ({
  isActive = false,
  onClick,
  renderIcon,
  children,
}: TCyrTriggerProps) => {
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
