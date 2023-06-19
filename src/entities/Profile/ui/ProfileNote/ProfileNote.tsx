import styles from '../../styles/Profile.module.scss';
import { memo } from 'react';

export const ProfileNote = memo(({ note }: { note?: string | null }) => {
  if (!note) {
    return null;
  }
  return <span className={styles.person__note}>{note}</span>;
});
ProfileNote.displayName = 'ProfileNote';
