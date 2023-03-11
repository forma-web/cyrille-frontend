import styles from './Header.module.scss';
import { ReactComponent as Logo } from '@/assets/icons/logo.svg';
import Menu from '@/containers/Menu/Menu';

const Header = () => {
  return (
    <div className={styles.header__container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.header__buttons}>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
