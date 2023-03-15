import styles from './CyrRhombus.module.scss';

type TCyrRhombusProps = {
  filled?: number;
};

const CyrRhombus = ({ filled = 1 }: TCyrRhombusProps) => {
  return (
    <div className={styles.rhombus}>
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
