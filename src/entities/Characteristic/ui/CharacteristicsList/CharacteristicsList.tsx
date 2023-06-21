import styles from './CharacteristicsList.module.scss';
import { TCharacteristic } from '../../model/types';

type TCharacteristicsList<T> = {
  characteristics: TCharacteristic<T>[];
  origin: T;
};

export const CharacteristicsList = <T,>({
  characteristics,
  origin,
}: TCharacteristicsList<T>) => {
  return (
    <ul className={styles.statistic}>
      {characteristics.map(({ title, value, caption }) => (
        <li key={title} className={styles.statistic__item}>
          <div className={styles.statistic__title}>{title}</div>
          <div className={styles.statistic__value}>
            {typeof value === 'string' ? value : value(origin)}
          </div>
          <div className={styles.statistic__caption}>
            {typeof caption === 'string' ? caption : caption(origin)}
          </div>
        </li>
      ))}
    </ul>
  );
};
