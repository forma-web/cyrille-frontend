import styles from './CyrModal.module.scss';
import cn from 'classnames';

type TCyrModal = {
  children?: React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
};

export const CyrModal = ({ children, className, onClose }: TCyrModal) => {
  return (
    <div className={styles.modal} onClick={onClose}>
      <div
        className={cn(styles.modal__block, className)}
        // onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
