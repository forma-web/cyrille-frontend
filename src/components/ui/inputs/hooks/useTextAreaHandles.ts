import React, {
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

const useTextAreaHandles = (
  { onChange, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref: React.ForwardedRef<HTMLTextAreaElement>,
) => {
  const [value, setValue] = useState('');
  const fieldId = useId();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => textAreaRef.current!);

  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = '0px';
      const scrollHeight = textArea.scrollHeight;
      textArea.style.height = scrollHeight + 'px';
    }
  }, [textAreaRef, value]);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(() => evt.target?.value);
    onChange?.(evt);
  };

  return {
    ...props,
    id: fieldId,
    ref: textAreaRef,
    value,
    onChange: handleChange,
  };
};

export default useTextAreaHandles;
