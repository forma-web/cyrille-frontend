import styles from './CyrRangeInput.module.scss';

type TCyrRangeInput = {
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const CyrRangeInput = ({ value, onChange }: TCyrRangeInput) => {
  return (
    <input
      type="range"
      step="any"
      className={styles.range__input}
      style={{
        background: `linear-gradient(to right, var(--black-color) ${value}%, var(--gray30) ${value}%)`,
      }}
      value={value}
      onChange={onChange}
    />
  );
};

export default CyrRangeInput;
