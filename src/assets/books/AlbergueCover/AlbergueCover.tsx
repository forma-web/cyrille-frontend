import { useRef } from 'react';
import styles from './AlbergueCover.module.scss';
import useAnimation from './useAnimation';

export const AlbergueCover = () => {
  const coverElement = useRef<HTMLDivElement>(null);
  const circleElement = useRef<HTMLDivElement>(null);

  useAnimation(coverElement, circleElement);

  return (
    <div className={styles.cover} ref={coverElement}>
      <div className={styles.cover__container}>
        <img src="/images/albergue/cover-default.png" />
      </div>
      <div className={styles.cover__container} ref={circleElement}>
        <img
          className={styles.cover__hover}
          src="/images/albergue/cover-hover.png"
        />
      </div>

      <div className={styles.cover__interaction}>
        <div className={styles.interaction__circle}></div>
        <div className={styles.interaction__circle}></div>
        <div className={styles.interaction__circle}></div>
      </div>
    </div>
  );
};
