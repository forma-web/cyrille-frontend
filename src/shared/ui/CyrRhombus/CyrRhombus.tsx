import styles from './CyrRhombus.module.scss';
import cn from 'classnames';

type TCyrRhombusProps = {
  width?: number;
  filled?: number;
} & React.HTMLAttributes<HTMLElement>;

export const CyrRhombus = ({
  width,
  filled = 1,
  className,
}: TCyrRhombusProps) => {
  return (
    <div
      className={cn(styles.rhombus, className)}
      style={{ fontSize: width !== undefined ? width + 'rem' : undefined }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256,0,0,256,256,512,512,256ZM35.6736,256,256,35.6736,476.3264,256,256,476.3264Z" />
      </svg>
      <span
        style={{ width: `${filled * 100}%` }}
        className={styles.rhombus__fill}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M0 256 256 0l256 256-256 256z" />
        </svg>
      </span>
    </div>
  );
};
