import styles from './CyrRangeInput.module.scss';

type TCyrRangeInput = {
  value: number;
  step: number | null;
  
};

const CyrRangeInput = ({ value, step }: TCyrRangeInput) => {
  return (
    <input
      type="range"
      step={step !== null ? step : 'any'}
      className={styles.range__input}
      style={{
        background: `linear-gradient(to right, var(--black-color) ${value}%, var(--gray30) ${value}%)`,
      }}
      value={value}
    />
  );
};

export default CyrRangeInput;
