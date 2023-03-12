import styles from './MenuContent.module.scss';
import cn from 'classnames';
import { ReactComponent as Logo } from '@/assets/icons/logo.svg';
import MenuList from '../MenuList/MenuList';
import { TMenuContentProps } from '../../types/menu';

const MenuContent = ({ isOpen, toggleMenu }: TMenuContentProps) => {
  return (
    <nav className={cn(styles.menu, isOpen && styles.menu_open)}>
      <div className={styles.menu__container}>
        <div className={styles.menu__header} onClick={toggleMenu}>
          <Logo />
        </div>
        <div className={styles.menu__body}>
          <MenuList toggleMenu={toggleMenu} />
          <div className={styles.menu__description}>
            the interactive e-book you&apos;ll be in love with
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuContent;
