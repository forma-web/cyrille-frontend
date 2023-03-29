import { useEffect, useRef, useState } from 'react';
import styles from './CyrRangeInput.module.scss';

const CyrRangeInput = () => {
  const [value, setValue] = useState(0);
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
      step="any"
      className={styles.range__input}
      style={{
        background: `linear-gradient(to right, var(--black-color) ${value}%, var(--gray30) ${value}%)`,
      }}
      onChange={handleChange}
    />
  );
};

export default CyrRangeInput;
