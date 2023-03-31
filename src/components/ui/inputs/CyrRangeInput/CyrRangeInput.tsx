import { useEffect, useState } from 'react';
import styles from './CyrRangeInput.module.scss';

type TCyrRangeInput = {
  defaultValue: number;
  onChange: (value: number) => void;
};

const CyrRangeInput = ({ defaultValue, onChange }: TCyrRangeInput) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(() => defaultValue);
  }, [defaultValue]);

  return (
    <input
      type="range"
      step="any"
      className={styles.range__input}
      style={{
        background: `linear-gradient(to right, var(--black-color) ${value}%, var(--gray30) ${value}%)`,
      }}
      value={value}
      onChange={(e) => setValue(() => Number(e.target.value))}
    />
  );
};

export default CyrRangeInput;
