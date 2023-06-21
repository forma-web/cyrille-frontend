import { PropsWithChildren, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { AudioTrigger } from 'features/Triggers';

export const AlbergueAudio = ({ children }: PropsWithChildren) => {
  const [active, setActive] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  const handleClick = useCallback(() => {
    if (!modalRoot) {
      setModalRoot(() => document.getElementById('modal-main'));
    }
    setActive((prev) => !prev);
  }, [modalRoot]);

  return (
    <>
      <AudioTrigger isActive={active} onClick={handleClick}>
        {children}
      </AudioTrigger>
      {modalRoot &&
        active &&
        createPortal(
          <audio
            src="../albergue/track.mp3"
            autoPlay
            onEnded={() => setActive(() => false)}
          />,
          modalRoot,
        )}
    </>
  );
};
