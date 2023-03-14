import { TUser } from '../../types/user';
import styles from './ProfileInfo.module.scss';

type TProfileInfoProps = {
  user: TUser;
};

const ProfileInfo = ({ user }: TProfileInfoProps) => {
  const { name, email } = user;

  return (
    <div className={styles.person}>
      <div className={styles.person__avatar}>
        {name.trim()[0].toUpperCase()}
      </div>
      <div className={styles.person__info}>
        <h4 className={styles.person__name}>{name}</h4>
        <div className={styles.person__description}>{email}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
