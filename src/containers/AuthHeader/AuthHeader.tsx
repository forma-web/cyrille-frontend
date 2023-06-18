import styles from './AuthHeader.module.scss';
import { ReactComponent as Logo } from 'shared/assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'shared/consts/routers';
import { XMarkIcon } from '@heroicons/react/24/outline';

const AuthHeader = () => {
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

export default AuthHeader;
