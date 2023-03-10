import React, { useState } from 'react';
import styles from './MenuToggle.module.scss';
import cn from 'classnames';

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <button
      onClick={toggleMenu}
      className={cn(styles.menuToggle, isOpen && styles.menuToggle_open)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuToggle;
