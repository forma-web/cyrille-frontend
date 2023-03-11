import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuContent.module.scss';
import cn from 'classnames';
import { ReactComponent as Logo } from '@/assets/icons/logo.svg';

type TMenuContentProps = {
  isOpen?: boolean;
  toggleMenu?: () => void;
};

const MenuContent = ({ isOpen, toggleMenu }: TMenuContentProps) => {
  return (
    <nav className={cn(styles.menu, isOpen && styles.menu_open)}>
      <div className={styles.menu__container}>
        <div className={styles.menu__header} onClick={toggleMenu}>
          <Logo />
        </div>
        <div className={styles.menu__body}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link to="/" className={styles.menu__link} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link to="/" className={styles.menu__link}>
                Profile
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link to="/" className={styles.menu__link}>
                My book
              </Link>
            </li>
          </ul>
          <div className={styles.menu__description}>
            the interactive e-book you'll be in love with
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuContent;
