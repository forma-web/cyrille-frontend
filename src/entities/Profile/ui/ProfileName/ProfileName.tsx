import styles from '../../styles/Profile.module.scss';
import { memo } from 'react';

export const ProfileName = memo(({ name }: { name: string }) => {
  const [firstName, ...lastName] = name.split(' ');

  return (
    <h4 className={styles.person__name}>
      {firstName}&#x20;
      {lastName && (
        <span className={styles.person__lastname}>{lastName.join(' ')}</span>
      )}
    </h4>
  );
});
ProfileName.displayName = 'ProfileName';
