import { PropsWithChildren, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { CyrModal } from 'shared/ui';
import { PhotoTrigger } from 'features/Triggers';
import styles from './AlbergueModalPhoto.module.scss';

export const AlbergueModalPhoto = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  const openPopup = useCallback(() => {
    if (!modalRoot) {
      setModalRoot(() => document.getElementById('modal-main'));
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
      <PhotoTrigger isActive={open} onClick={openPopup}>
        {children}
      </PhotoTrigger>
      {modalRoot &&
        open &&
        createPortal(
          <CyrModal onClose={closePopup} className={styles.photoModal}>
            <div className={styles.photoModal__image} onClick={closePopup}>
              <img src="../albergue/carter.png" />
            </div>
          </CyrModal>,
          modalRoot,
        )}
    </>
  );
};