import styles from './MenuContent.module.scss';
import cn from 'classnames';
import { ReactComponent as Logo } from '@/assets/icons/logo.svg';
import MenuList from '../MenuList/MenuList';
import { TMenuContentProps } from '../../types/menu';
import CyrDivide from '@/components/ui/CyrDivide/CyrDivide';
import { ERoutes } from '@/constants/routers';
import { Link } from 'react-router-dom';

const MenuContent = ({ isOpen, toggleMenu }: TMenuContentProps) => {
  return (
    <nav
      className={cn(styles.menu, isOpen && styles.menu_open)}
      onClick={toggleMenu}
    >
      <div className={styles.menu__container}>
        <Link to={ERoutes.home} className={styles.menu__header}>
          <Logo />
        </Link>
        <div className={styles.menu__body}>
          <CyrDivide large total={1} />
          <MenuList />
          <div className={styles.menu__description}>
            the interactive e-book you&apos;ll be in love with
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuContent;
