import styles from './AuthHeader.module.scss';
import { Logo } from 'shared/ui';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'shared/consts/routers';
import { XMarkIcon } from '@heroicons/react/24/outline';

export const AuthHeader = () => {
  return (
    <div className={styles.header}>
      <Link to={AppRoutes.home}>
        <Logo />
      </Link>
      <Link to={AppRoutes.home} className={styles.header__buttons}>
        <XMarkIcon />
      </Link>
    </div>
  );
};
