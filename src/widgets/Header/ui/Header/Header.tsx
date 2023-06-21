import styles from './Header.module.scss';
import { Logo } from 'shared/ui';
import { Menu } from 'widgets/Menu';
import { Link } from 'react-router-dom';
import { getRouteHome } from 'shared/consts/routers';

export const Header = () => {
  return (
    <div className={styles.header__container}>
      <Link to={getRouteHome()} className={styles.logo}>
        <Logo />
      </Link>
      <div className={styles.header__buttons}>
        <Menu />
      </div>
    </div>
  );
};
