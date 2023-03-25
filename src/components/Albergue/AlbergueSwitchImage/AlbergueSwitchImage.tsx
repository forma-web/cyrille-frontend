import { useCallback, useState } from 'react';
import styles from './AlbergueSwitchImage.module.scss';
import cn from 'classnames';
import AlbergueToggle from './components/AlbergueToggle/AlbergueToggle';

const AlbergueSwitchImage = () => {
  const [active, setActive] = useState(false);

  const handleToggle = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

  return (
    <div className={styles.switchImages}>
      <div className={styles.switchImages__toggle}>
        <AlbergueToggle isActive={active} onClick={handleToggle} />
      </div>
      <img src="./images/albergue/sand-night.jpg" />
      <img
        src="./images/albergue/sand-day.jpg"
        className={cn(active && styles.switchImages__image_hide)}
      />
    </div>
  );
};

export default AlbergueSwitchImage;
