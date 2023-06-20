import styles from './ProfilePage.module.scss';
import { CyrLoader } from 'shared/ui';
import { UserProfile, useUser } from 'entities/User';

const ProfilePage = () => {
  const { isLoading, data: user } = useUser();

  if (!user || isLoading) {
    return <CyrLoader />;
  }

  return (
    <div className={styles.profile}>
      <UserProfile user={user?.data} />
    </div>
  );
};

export default ProfilePage;
