import styles from './CyrDivide.module.scss';
import cn from 'classnames';

type TCyrDivideProps = {
  total?: number;
  large?: boolean;
};

const CyrDivide = ({ total = 2, large }: TCyrDivideProps) => {
  return (
    <div className={cn(styles.divide, large && styles.divide_large)}>
      {new Array(total).fill(0).map((_, index) => (
        <div key={index} className={styles.divide__item}></div>
      ))}
    </div>
  );
};

export default CyrDivide;
