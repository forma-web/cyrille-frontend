import React, { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { EffectTrigger } from 'features/Triggers';
import styles from './AlbergueRainAnimation.module.scss';
import { useRainAnimation } from '../../lib/hooks/useRainAnimation';

export const AlbergueRainAnimation = ({ children }: PropsWithChildren) => {
  const {
    canvasRef,
    startAnimation,
    cancelAnimation,
    activeAnimation,
    modalRoot,
  } = useRainAnimation();

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    e.stopPropagation();
    cancelAnimation();
  };

  return (
    <>
      <EffectTrigger isActive={activeAnimation} onClick={startAnimation}>
        {children}
      </EffectTrigger>
      {activeAnimation &&
        modalRoot &&
        createPortal(
          <canvas
            ref={canvasRef}
            className={styles.canvas}
            onClick={handleClick}
          />,
          modalRoot,
        )}
    </>
  );
};
