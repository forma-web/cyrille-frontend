import React, { useState, memo } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import styles from './CyrPasswordInputButtons.module.scss';
import { CyrButton } from 'shared/ui';

type TPasswordButtonsProps = {
  changePassword: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CyrPasswordInputButtons = memo(
  ({ changePassword }: TPasswordButtonsProps) => {
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
  },
);

CyrPasswordInputButtons.displayName = 'CyrPasswordInputButtons';
