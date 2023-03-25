import { useState } from 'react';
import styles from './AlbergueSwitchImage.module.scss';
import cn from 'classnames';

const AlbergueSwitchImage = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.switchImages}>
      <img src="./images/albergue/sand-night.jpg" alt="" />
      <img
        src="./images/albergue/sand-day.jpg"
        className={cn(active && styles.switchImages__image_hide)}
        alt=""
      />
    </div>
  );
};

export default AlbergueSwitchImage;
