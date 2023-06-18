import styles from './CyrDivide.module.scss';
import cn from 'classnames';
import { memo } from 'react';
import { CyrRhombus } from 'shared/ui';

type TCyrDivideProps = {
  total?: number;
  large?: boolean;
};

export const CyrDivide = memo(({ total = 2, large }: TCyrDivideProps) => {
  return (
    <div className={cn(styles.divide, large && styles.divide_large)}>
      {new Array(total).fill(0).map((_, index) => (
        <CyrRhombus className={styles.divide__item} key={index} />
      ))}
    </div>
  );
});

CyrDivide.displayName = 'CyrDivide';
