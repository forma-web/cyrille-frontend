import { useRef, useState } from 'react';
import styles from './AlbergueCover.module.scss';
import cn from 'classnames';
import useCursor from './useCursor';

const AlbergueCover = () => {
  const [isInit, setIsInit] = useState(false);
  const coverElement = useRef<HTMLDivElement>(null);
  const circleElement = useRef<HTMLImageElement>(null);

  useCursor({
    coverElement,
    circleElement,
    isInit,
  });

  return (
    <div
      className={cn(styles.cover, isInit && styles.cover_init)}
      ref={coverElement}
      onMouseEnter={() => setIsInit(true)}
    >
      <img src="../albergue/cover-default.png" alt="" />
      <img
        ref={circleElement}
        className={styles.cover__hover}
        src="../albergue/cover-hover.png"
        alt=""
      />

      <div className={styles.interaction}>
        <div className={styles.interaction__circle} />
        <div className={styles.interaction__circle} />
        <div className={styles.interaction__circle} />
      </div>
    </div>
  );
};

export default AlbergueCover;
