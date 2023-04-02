import { Link, useLocation } from 'react-router-dom';
import { MENU_LINKS } from '../../constants/links';
import styles from './MenuList.module.scss';
import cn from 'classnames';

const MenuList = () => {
  const { pathname } = useLocation();

  return (
    <ul className={styles.menu__list}>
      {MENU_LINKS.map(({ label, href }) => (
        <li key={href} className={styles.menu__item}>
          <Link
            to={href}
            className={cn(
              styles.menu__link,
              pathname === href && styles.menu__link_active,
            )}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
