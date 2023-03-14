import ProfileInfo from '@/components/ProfileInfo/ProfileInfo';
import { useQuery } from '@tanstack/react-query';
import { currentUserFetch } from '@/services/user';
import styles from './ProfilePage.module.scss';
import CyrLoader from '@/components/ui/CyrLoader/CyrLoader';
import CyrDivide from '@/components/ui/CyrDivide/CyrDivide';

const ProfilePage = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: currentUserFetch,
  });

  if (!user || isLoading) {
    return <CyrLoader />;
  }

  return (
    <div className={styles.profile}>
      <ProfileInfo user={user?.data} />
      <CyrDivide />
      <h4>Profile settings</h4>
    </div>
  );
};

export default ProfilePage;
