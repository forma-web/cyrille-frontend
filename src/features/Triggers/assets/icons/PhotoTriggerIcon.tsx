import cn from 'classnames';
import { TTriggerIcon } from '../../model/types';
import styles from '../styles/TriggerIcon.module.scss';

export const PhotoTriggerIcon = ({ isActive = false }: TTriggerIcon) => {
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
        d="M12,9.0555a3.0561,3.0561,0,1,0,3,3.0556A3.0293,3.0293,0,0,0,12,9.0555Z"
        className={styles.background}
      />
      <path
        d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm6,15.7778A1.2148,1.2148,0,0,1,16.8,17H7.2A1.2148,1.2148,0,0,1,6,15.7778V8.4445A1.2148,1.2148,0,0,1,7.2,7.2222H9.102l.738-.825A1.2076,1.2076,0,0,1,10.728,6h2.544a1.1749,1.1749,0,0,1,.4821.1039,1.195,1.195,0,0,1,.4.2933l.744.825H16.8A1.2148,1.2148,0,0,1,18,8.4445Z"
        className={styles.background}
      />
      <path
        d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,23A11,11,0,1,1,23,12,11,11,0,0,1,12,23Z"
        className={styles.border}
      />
      <path
        d="M16.8,7.2222H14.898l-.744-.825a1.195,1.195,0,0,0-.4-.2933A1.1749,1.1749,0,0,0,13.272,6H10.728a1.2076,1.2076,0,0,0-.888.3972l-.738.825H7.2A1.2148,1.2148,0,0,0,6,8.4444v7.3334A1.2148,1.2148,0,0,0,7.2,17h9.6A1.2148,1.2148,0,0,0,18,15.7778V8.4444A1.2148,1.2148,0,0,0,16.8,7.2222ZM12,15.1667a3.0561,3.0561,0,1,1,3-3.0556A3.0293,3.0293,0,0,1,12,15.1667Z"
        className={styles.effect}
      />
    </svg>
  );
};
