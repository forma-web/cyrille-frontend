import React, { useEffect, useState } from 'react';
import styles from './CyrInput.module.scss';
import cn from 'classnames';

type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | undefined;
};

const CyrInput = React.forwardRef<HTMLInputElement, TInputProps>(
  (
    { label, error, type = 'text', className, value, children, ...rest },
    ref
  ) => {
    const [isEmpty, setIsEmpty] = useState(
      !value || String(value).trim().length === 0
    );
    const [isActive, setIsActive] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setIsEmpty(() => e.target.value.trim().length === 0);
    };

    const handleFocus = () => {
      setIsActive(() => true);
    };

    const handleBlur = () => {
      setIsActive(() => false);
    };

    return (
      <label
        className={cn(
          styles.input,
          error && styles.input_error,
          isEmpty && styles.input_empty,
          isActive && styles.input_active,
          className
        )}
      >
        {label && <span className={styles.label}>{label}</span>}
        <div className={styles.input__container}>
          <input
            ref={ref}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type={type}
            placeholder={label}
            {...rest}
          />
          <div className={styles.input__control}>{children}</div>
        </div>
        {error && <span className={styles.error}>{error}</span>}
      </label>
    );
  }
);

CyrInput.displayName = 'CyrInput';

export default CyrInput;
