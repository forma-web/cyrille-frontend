import React, { useState } from 'react';
import styles from './MenuToggle.module.scss';
import cn from 'classnames';
import CyrButton from '@/components/ui/CyrButton/CyrButton';

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <CyrButton
      onClick={toggleMenu}
      icon
      className={cn(styles.menuToggle, isOpen && styles.menuToggle_open)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </CyrButton>
  );
};

export default MenuToggle;
