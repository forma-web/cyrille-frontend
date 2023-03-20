import React from 'react';
import styles from './CyrContainer.module.scss';
import cn from 'classnames';

type TCyrContainerProps = {
  children?: React.ReactNode;
  gap?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const CyrContainer = ({
  gap = 2.4,
  className,
  children,
}: TCyrContainerProps) => {
  return (
    <section
      className={cn(styles.container, className)}
      style={{ rowGap: `${gap}rem` }}
    >
      {children}
    </section>
  );
};

export default CyrContainer;
