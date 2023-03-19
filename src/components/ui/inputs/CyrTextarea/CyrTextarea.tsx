import React from 'react';
import styles from './CyrTextarea.module.scss';
import cn from 'classnames';
import useTextAreaHandles from '../hooks/useTextAreaHandles';

const CyrTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
  const rest = useTextAreaHandles(props, ref);
  const { maxLength, className, id: fieldId, value } = rest;

  const labelStyles = cn(styles.textarea, className);

  return (
    <label className={labelStyles} htmlFor={fieldId}>
      <div className={styles.textarea__container}>
        <textarea {...rest} />
      </div>
      <div className={styles.textarea__footer}>
        {maxLength !== undefined && `${value.length} / ${maxLength}`}
      </div>
    </label>
  );
});

CyrTextarea.displayName = 'CyrTextarea';

export default React.memo(CyrTextarea);
