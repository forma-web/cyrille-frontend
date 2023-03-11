import React, { useState } from 'react';
import styles from './MenuToggle.module.scss';
import cn from 'classnames';
import CyrButton from '@/components/ui/CyrButton/CyrButton';

type TMenuToggleProps = React.ButtonHTMLAttributes<HTMLElement> & {
  isOpen?: boolean;
};

const MenuToggle = ({ isOpen, ...rest }: TMenuToggleProps) => {
  return (
    <CyrButton
      icon
      className={cn(styles.menuToggle, isOpen && styles.menuToggle_open)}
      {...rest}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </CyrButton>
  );
};

export default MenuToggle;
