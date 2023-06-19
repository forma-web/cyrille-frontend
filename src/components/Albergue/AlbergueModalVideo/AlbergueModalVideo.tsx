import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { CyrModal } from 'shared/ui';
import styles from './AlbergueModalVideo.module.scss';
import { VideoTrigger } from 'features/Triggers';

const AlbergueModalVideo = ({ children }: { children?: React.ReactNode }) => {
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
      <VideoTrigger isActive={open} onClick={openPopup}>
        {children}
      </VideoTrigger>
      {modalRoot &&
        open &&
        createPortal(
          <CyrModal onClose={closePopup} className={styles.videoModal}>
            <div className={styles.videoModal__body} onClick={closePopup}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iVysAQVPCAY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </CyrModal>,
          modalRoot,
        )}
    </>
  );
};

export default AlbergueModalVideo;
