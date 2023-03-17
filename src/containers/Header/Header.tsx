import styles from './Header.module.scss';
import { ReactComponent as Logo } from '@/assets/icons/logo.svg';
import Menu from '@/containers/Menu/Menu';
import { Link } from 'react-router-dom';
import { ERoutes } from '@/constants/routers';

const Header = () => {
  return (
    <div className={styles.header__container}>
      <Link to={ERoutes.home} className={styles.logo}>
        <Logo />
      </Link>
      <div className={styles.header__buttons}>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
