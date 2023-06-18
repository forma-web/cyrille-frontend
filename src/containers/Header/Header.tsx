import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'shared/assets/icons/logo.svg';
import { Menu } from 'widgets/Menu';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'shared/consts/routers';

const Header = () => {
  return (
    <div className={styles.header__container}>
      <Link to={AppRoutes.home} className={styles.logo}>
        <Logo />
      </Link>
      <div className={styles.header__buttons}>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
