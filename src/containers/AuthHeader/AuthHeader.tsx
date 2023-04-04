import styles from './AuthHeader.module.scss';
import { ReactComponent as Logo } from '@/assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import { ERoutes } from '@/constants/routers';
import { XMarkIcon } from '@heroicons/react/24/outline';

const AuthHeader = () => {
  return (
    <div className={styles.header}>
      <Link to={ERoutes.home}>
        <Logo />
      </Link>
      <Link to={ERoutes.home} className={styles.header__buttons}>
        <XMarkIcon />
      </Link>
    </div>
  );
};

export default AuthHeader;
