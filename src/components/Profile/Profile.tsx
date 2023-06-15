import { CyrAvatar } from 'shared/ui';
import styles from './Profile.module.scss';
import cn from 'classnames';

type TProfileProps = {
  name: string;
  caption?: string;
  avatar?: string | null;
  notes?: string | null;
  small?: boolean;
  children?: React.ReactNode;
  dark?: boolean;
};

const Profile = ({
  name,
  avatar,
  caption,
  notes,
  small,
  children,
  dark = false,
}: TProfileProps) => {
  const firstName = name.split(' ')[0];
  const lastName = name.split(' ').slice(1).join(' ');

  return (
    <div
      className={cn(
        styles.person,
        small && styles.person_small,
        dark && styles.person_dark,
      )}
    >
      <div className={styles.person__content}>
        <div className={styles.person__data}>
          <CyrAvatar
            name={name}
            image={avatar}
            width={small ? 4.6 : 12}
            dark={dark}
          />
          <div className={styles.person__info}>
            <h4 className={styles.person__name}>
              {firstName}&#x20;
              {lastName && (
                <span className={styles.person__lastname}>{lastName}</span>
              )}
            </h4>
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
