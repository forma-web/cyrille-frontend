import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import styles from './CyrPasswordInputButtons.module.scss';

type TPasswordButtonsProps = {
  changePassword: React.Dispatch<React.SetStateAction<boolean>>;
};

const CyrPasswordInputButtons = ({ changePassword }: TPasswordButtonsProps) => {
  const [hidePassword, setHidePassword] = useState(() => {
    changePassword(() => true);
    return true;
  });

  const toggleVisiblePassword = () => {
    setHidePassword((prevValue) => !prevValue);
    changePassword((prevValue) => !prevValue);
  };

  return (
    <button
      onClick={toggleVisiblePassword}
      type="button"
      className={styles['hide-button']}
    >
      {hidePassword ? <EyeSlashIcon /> : <EyeIcon />}
    </button>
  );
};

export default React.memo(CyrPasswordInputButtons);
