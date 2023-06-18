import React, { useId } from 'react';
import styles from './CyrInput.module.scss';
import cn from 'classnames';
import { useInputHandles } from '../../lib/hooks/useInputHandles';
import { TInputProps } from '../../model/types';
import { CyrInputStatus } from '../CyrInputStatus/CyrInputStatus';

export const CyrInput = React.forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      label,
      error,
      isValid,
      type = 'text',
      className,
      children,
      statusHidden,
      ...rest
    },
    ref,
  ) => {
    const { isEmpty, isActive, ...handles } = useInputHandles(rest);
    const fieldId = useId();

    const labelStyles = cn(
      styles.input,
      error && styles.input_error,
      isEmpty && styles.input_empty,
      isActive && styles.input_active,
      className,
    );

    return (
      <label className={labelStyles} htmlFor={fieldId}>
        {label && <span className={styles.label}>{label}</span>}
        <div className={styles.input__container}>
          <input
            ref={ref}
            type={type}
            placeholder={label}
            id={fieldId}
            {...rest}
            {...handles}
          />
          {(children || !statusHidden) && (
            <div className={styles.input__control}>
              {children ?? (
                <CyrInputStatus isValid={isValid} isError={!!error} />
              )}
            </div>
          )}
        </div>
        <div className={styles.input__footer}>
          {error && <span className={styles.error}>{error}</span>}
        </div>
      </label>
    );
  },
);

CyrInput.displayName = 'CyrInput';
