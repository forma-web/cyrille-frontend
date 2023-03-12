import React from 'react';
import styles from './CyrInput.module.scss';
import cn from 'classnames';
import useInputHandles from '../hooks/useInputHandles';
import { TInputProps } from '../types/input';
import CyrInputStatus from '../CyrInputStatus/CyrInputStatus';

const CyrInput = React.forwardRef<HTMLInputElement, TInputProps>(
  (
    { label, error, isValid, type = 'text', className, children, ...rest },
    ref,
  ) => {
    const { isEmpty, isActive, handles } = useInputHandles(rest);

    return (
      <label
        className={cn(
          styles.input,
          error && styles.input_error,
          isEmpty && styles.input_empty,
          isActive && styles.input_active,
          className,
        )}
      >
        {label && <span className={styles.label}>{label}</span>}
        <div className={styles.input__container}>
          <input
            ref={ref}
            type={type}
            placeholder={label}
            {...rest}
            {...handles}
          />
          <div className={styles.input__control}>
            {children ?? <CyrInputStatus isValid={isValid} isError={!!error} />}
          </div>
        </div>
        {error && <span className={styles.error}>{error}</span>}
      </label>
    );
  },
);

CyrInput.displayName = 'CyrInput';

export default React.memo(CyrInput);
