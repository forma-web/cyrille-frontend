import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import CyrModal from '@/components/ui/CyrModal/CyrModal';
import PhotoTrigger from '../../triggers/PhotoTrigger';
import styles from './AlbergueModalPhoto.module.scss';

const AlbergueModalPhoto = ({ children }: { children?: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  const openPopup = useCallback(() => {
    if (!modalRoot) {
      setModalRoot(() => document.getElementById('modal-main'));
    }
    setOpen(() => true);
  }, [modalRoot]);

  const closePopup = useCallback(() => {
    setOpen(() => false);
  }, []);

  return (
    <>
      <PhotoTrigger isActive={open} onClick={openPopup}>
        {children}
      </PhotoTrigger>
      {modalRoot &&
        open &&
        createPortal(
          <CyrModal onClose={closePopup} className={styles.photoModal}>
            <div className={styles.photoModal__image}>
              <img src="./albergue/carter.png" />
            </div>
          </CyrModal>,
          modalRoot,
        )}
    </>
  );
};

export default AlbergueModalPhoto;
