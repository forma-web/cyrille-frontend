import styles from './MenuContent.module.scss';
import cn from 'classnames';
import { MenuList } from '../MenuList/MenuList';
import { CyrDivide, Logo } from 'shared/ui';
import { AppRoutes } from 'shared/consts/routers';
import { Link } from 'react-router-dom';

type TMenuContentProps = {
  isOpen?: boolean;
  toggleMenu?: () => void;
};

export const MenuContent = ({ isOpen, toggleMenu }: TMenuContentProps) => {
  return (
    <nav
      className={cn(styles.menu, isOpen && styles.menu_open)}
      onClick={toggleMenu}
    >
      <div className={styles.menu__container}>
        <Link to={AppRoutes.home} className={styles.menu__header}>
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
