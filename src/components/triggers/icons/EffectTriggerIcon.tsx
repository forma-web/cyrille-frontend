import cn from 'classnames';
import { TTriggerIcon } from './types';
import styles from './styles.module.scss';

const EffectTriggerIcon = ({ isActive = false }: TTriggerIcon) => {
  const classNames = cn(styles.triggerIcon, isActive && styles.active);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={classNames}
    >
      <path
        d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM10.6,16.5556,8.85,12.5833,5,10.7778,8.85,8.9722,10.6,5l1.75,3.9722,3.85,1.8056-3.85,1.8055Zm6.475-.5417L16.2,18l-.875-1.9861L13.4,15.1111l1.925-.9028.875-1.9861.875,1.9861L19,15.1111Z"
        className={styles.background}
      />
      <path
        d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,23A11,11,0,1,1,23,12,11,11,0,0,1,12,23Z"
        className={styles.border}
      />
      <path
        d="M10.6,16.5556,8.85,12.5833,5,10.7778,8.85,8.9722,10.6,5l1.75,3.9722,3.85,1.8056-3.85,1.8055ZM16.2,18l-.875-1.9861L13.4,15.1111l1.925-.9028.875-1.9861.875,1.9861L19,15.1111l-1.925.9028Z"
        className={styles.effect}
      />
    </svg>
  );
};

export default EffectTriggerIcon;
