import { useState } from 'react';

const useInputHandles = ({
  value,
  onChange,
  onBlur,
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [isEmpty, setIsEmpty] = useState(
    !value || String(value).trim().length === 0,
  );
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (onChange) onChange(e);
    setIsEmpty(() => e.target.value.trim().length === 0);
  };

  const handleFocus = () => {
    setIsActive(() => true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e);
    setIsActive(() => false);
  };

  return {
    isEmpty,
    isActive,
    handles: {
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
    },
  };
};

export default useInputHandles;
