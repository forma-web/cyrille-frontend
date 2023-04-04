import styles from './CyrError.module.scss';

type TCyrErrorProps = {
  message?: string;
};

const CyrError = ({ message }: TCyrErrorProps) => {
  if (!message) return null;

  return <div className={styles.error}>{message}</div>;
};

export default CyrError;
