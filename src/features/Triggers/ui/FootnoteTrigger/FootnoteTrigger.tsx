import React from 'react';
import styles from './FootnoteTrigger.module.scss';
import cn from 'classnames';
import { TTriggerProps } from 'shared/types/trigger';

export const FootnoteTrigger = ({
  isActive = false,
  onClick,
  children,
}: TTriggerProps) => {
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onClick && onClick();
  };

  const styleTrigger = cn(styles.trigger, isActive && styles.trigger_active);

  return (
    <span className={styleTrigger} onClick={handleClick}>
      {children}
    </span>
  );
};
