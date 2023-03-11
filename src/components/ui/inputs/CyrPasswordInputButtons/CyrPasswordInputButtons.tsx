import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import styles from './CyrPasswordInputButtons.module.scss';
import CyrButton from '@/components/ui/CyrButton/CyrButton';

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
    <CyrButton
      icon
      onClick={toggleVisiblePassword}
      type="button"
      className={styles['hide-button']}
    >
      {hidePassword ? <EyeSlashIcon /> : <EyeIcon />}
    </CyrButton>
  );
};

export default React.memo(CyrPasswordInputButtons);
