import styles from './CyrError.module.scss';

type TCyrErrorProps = {
  message?: string;
};

export const CyrError = ({ message }: TCyrErrorProps) => {
  if (!message) return null;

  return <div className={styles.error}>{message}</div>;
};
