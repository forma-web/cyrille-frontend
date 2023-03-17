import React from 'react';
import CyrAvatar from '../ui/CyrAvatar/CyrAvatar';
import styles from './Profile.module.scss';

type TProfileProps = {
  name: string;
  caption?: string;
  avatar?: string;
  notes?: string;
  small?: boolean;
  children?: React.ReactNode;
};

const Profile = ({ name, avatar, caption, notes, children }: TProfileProps) => {
  return (
    <div className={styles.person}>
      <div className={styles.person__content}>
        <div className={styles.person__data}>
          <CyrAvatar name={name} image={avatar} />
          <div className={styles.person__info}>
            <h4 className={styles.person__name}>{name}</h4>
            {caption && (
              <div className={styles.person__description}>{caption}</div>
            )}
          </div>
        </div>
        {children && <div className={styles.person__container}>{children}</div>}
      </div>
      {notes && <span className={styles.person__note}>{notes}</span>}
    </div>
  );
};

export default Profile;
