import { CyrAvatar } from 'shared/ui';
import styles from '../../styles/Profile.module.scss';
import cn from 'classnames';
import { memo } from 'react';
import { ProfileName } from '../ProfileName/ProfileName';
import { ProfileCaption } from '../ProfileCaption/ProfileCaption';
import { ProfileNote } from '../ProfileNote/ProfileNote';

type TProfileProps = {
  name: string;
  caption?: string | null;
  avatar?: string | null;
  notes?: string | null;
  small?: boolean;
  children?: React.ReactNode;
  dark?: boolean;
};

export const Profile = memo(
  ({
    name,
    avatar,
    caption,
    notes,
    small,
    children,
    dark = false,
  }: TProfileProps) => {
    const classNames = cn(
      styles.person,
      small && styles.person_small,
      dark && styles.person_dark,
    );

    return (
      <div className={classNames}>
        <div className={styles.person__content}>
          <div className={styles.person__data}>
            <CyrAvatar
              name={name}
              image={avatar}
              width={small ? 4.6 : 12}
              dark={dark}
            />
            <div className={styles.person__info}>
              <ProfileName name={name} />
              <ProfileCaption caption={caption} />
            </div>
          </div>
          {children && (
            <div className={styles.person__container}>{children}</div>
          )}
        </div>
        <ProfileNote note={notes} />
      </div>
    );
  },
);
Profile.displayName = 'Profile';
