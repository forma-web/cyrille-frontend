import styles from './CyrRhombus.module.scss';
import cn from 'classnames';

type TCyrRhombusProps = {
  width?: number;
  filled?: number;
} & React.HTMLAttributes<HTMLElement>;

const CyrRhombus = ({ width = 1, filled = 1, className }: TCyrRhombusProps) => {
  return (
    <div
      className={cn(styles.rhombus, className)}
      style={{ width: width + 'rem' }}
    >
      <div className={styles.rhombus__inner}>
        {filled < 1 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="512"
            height="512"
            className={styles.rhombus__border}
          >
            <path d="M0,0V512H512V0ZM256,468.132,43.868,256,256,43.8679,468.132,256Z" />
          </svg>
        )}
        <div
          className={styles.rhombus__fill}
          style={{ width: `${filled * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CyrRhombus;
