import { TCyrTriggerProps } from '@/types/trigger';
import styles from './CyrTrigger.module.scss';

const CyrTrigger = ({
  isActive = false,
  onClick,
  renderIcon,
  children,
}: TCyrTriggerProps) => {
  const icon = renderIcon ? renderIcon(isActive) : null;

  return (
    <span className={styles.trigger} onClick={onClick}>
      {icon}
      {children}
    </span>
  );
};

export default CyrTrigger;
