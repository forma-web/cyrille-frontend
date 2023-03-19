import React from 'react';
import styles from './CyrTextarea.module.scss';
import cn from 'classnames';
import useTextAreaHandles from '../hooks/useTextAreaHandles';

const CyrTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
  const { fieldId, textAreaRef, value, onChange } = useTextAreaHandles(ref);

  const { maxLength, className, ...rest } = props;

  const labelStyles = cn(styles.textarea, className);

  return (
    <label className={labelStyles} htmlFor={fieldId}>
      <div className={styles.textarea__container}>
        <textarea
          {...rest}
          ref={textAreaRef}
          onChange={onChange}
          id={fieldId}
          value={value}
          maxLength={maxLength}
        />
      </div>
      <div className={styles.textarea__footer}>
        {maxLength !== undefined && `${value.length} / ${maxLength}`}
      </div>
    </label>
  );
});

CyrTextarea.displayName = 'CyrTextarea';

export default React.memo(CyrTextarea);
