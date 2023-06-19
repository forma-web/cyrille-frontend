import styles from '../../styles/Profile.module.scss';
import { memo } from 'react';

export const ProfileCaption = memo(
  ({ caption }: { caption?: string | null }) => {
    if (!caption) {
      return null;
    }
    return <div className={styles.person__description}>{caption}</div>;
  },
);
ProfileCaption.displayName = 'ProfileCaption';
