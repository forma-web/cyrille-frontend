import { useEffect, useRef, useState } from 'react';
import styles from './CyrRangeInput.module.scss';

type TCyrRangeInput = {
  currentValue: number;
  step: number | null;
};

const CyrRangeInput = ({ currentValue, step }: TCyrRangeInput) => {
  const [value, setValue] = useState(currentValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue((prev) =>
      inputRef.current ? Number(inputRef.current!.value) : prev,
    );
  }, [inputRef]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => Number(e.target.value));
  };

  return (
    <input
      ref={inputRef}
      type="range"
      step={step !== null ? step : 'any'}
      className={styles.range__input}
      style={{
        background: `linear-gradient(to right, var(--black-color) ${value}%, var(--gray30) ${value}%)`,
      }}
      value={value}
      onChange={handleChange}
    />
  );
};

export default CyrRangeInput;
