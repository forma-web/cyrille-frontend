import styles from './CyrInputStatus.module.scss';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

type TCyrInputStatusProps = {
  isValid?: boolean;
  isError?: boolean;
};

export const CyrInputStatus = ({ isValid, isError }: TCyrInputStatusProps) => {
  return (
    <>
      {isValid && <CheckIcon className={styles.valid} />}
      {isError && <ExclamationCircleIcon className={styles.error} />}
    </>
  );
};
