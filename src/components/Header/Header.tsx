import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '@/assets/icons/logo.svg';
import MenuToggle from '../buttons/MenuToggle/MenuToggle';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.header__buttons}>
        <MenuToggle />
      </div>
    </header>
  );
};

export default Header;
