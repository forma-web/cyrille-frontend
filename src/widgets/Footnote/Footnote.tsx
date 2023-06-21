import React, { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { CyrModal, CyrDivide } from 'shared/ui';
import { FootnoteTrigger } from 'features/Triggers';
import styles from './Footnote.module.scss';

type TFootnoteProps = {
  children: React.ReactNode;
  title?: string;
  description?: React.ReactNode;
};

export const Footnote = ({ children, title, description }: TFootnoteProps) => {
  const [open, setOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  const openPopup = useCallback(() => {
    if (!modalRoot) {
      setModalRoot(() => document.getElementById('modal-layout'));
    }
    setOpen(() => true);
  }, [modalRoot]);

  const closePopup: React.MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      e.stopPropagation();
      setOpen(() => false);
    },
    [],
  );

  return (
    <>
      <FootnoteTrigger isActive={open} onClick={openPopup}>
        {children}
      </FootnoteTrigger>
      {modalRoot &&
        open &&
        createPortal(
          <CyrModal onClose={closePopup} className={styles.footnodeModal}>
            <CyrDivide total={2} />
            {title && (
              <div className={styles.footnodeModal__title}>{title}</div>
            )}
            <div className={styles.footnodeModal__content}>{description}</div>
          </CyrModal>,
          modalRoot,
        )}
    </>
  );
};