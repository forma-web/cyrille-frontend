import styles from './AuthHeader.module.scss';
import { Logo } from 'shared/ui';
import { Link } from 'react-router-dom';
import { getRouteHome } from 'shared/consts/routers';
import { XMarkIcon } from '@heroicons/react/24/outline';

export const AuthHeader = () => {
  return (
    <div className={styles.header}>
      <Link to={getRouteHome()}>
        <Logo />
      </Link>
      <Link to={getRouteHome()} className={styles.header__buttons}>
        <XMarkIcon />
      </Link>
    </div>
  );
};
