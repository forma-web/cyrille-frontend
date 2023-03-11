import React from 'react';
import styles from './CyrInputStatus.module.scss';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

type TCyrInputStatusProps = {
  isValid?: boolean;
  isError?: boolean;
};

const CyrInputStatus = ({ isValid, isError }: TCyrInputStatusProps) => {
  return (
    <>
      {isValid && <CheckIcon className={styles.valid} />}
      {isError && <ExclamationCircleIcon className={styles.error} />}
    </>
  );
};

export default CyrInputStatus;
