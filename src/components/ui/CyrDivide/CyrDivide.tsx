import styles from './CyrDivide.module.scss';
import cn from 'classnames';
import CyrRhombus from '@/components/ui/CyrRhombus/CyrRhombus';

type TCyrDivideProps = {
  total?: number;
  large?: boolean;
};

const CyrDivide = ({ total = 2, large }: TCyrDivideProps) => {
  return (
    <div className={cn(styles.divide, large && styles.divide_large)}>
      {new Array(total).fill(0).map((_, index) => (
        <CyrRhombus className={styles.divide__item} key={index} />
      ))}
    </div>
  );
};

export default CyrDivide;
