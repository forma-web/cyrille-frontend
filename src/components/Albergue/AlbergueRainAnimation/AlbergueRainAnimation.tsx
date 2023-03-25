import React from 'react';
import { createPortal } from 'react-dom';
import EffectTrigger from '@/components/triggers/EffectTrigger';
import styles from './AlbergueRainAnimation.module.scss';
import useAnimation from './useAnimation';

type TAlbergueRainAnimationProps = {
  children?: React.ReactNode;
};

const AlbergueRainAnimation = ({ children }: TAlbergueRainAnimationProps) => {
  const {
    canvasRef,
    startAnimation,
    cancelAnimation,
    activeAnimation,
    modalRoot,
  } = useAnimation();

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
            onClick={cancelAnimation}
          />,
          modalRoot,
        )}
    </>
  );
};

export default AlbergueRainAnimation;
