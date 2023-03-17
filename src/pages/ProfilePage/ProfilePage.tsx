import ProfileInfo from '@/components/ProfileInfo/ProfileInfo';
import styles from './ProfilePage.module.scss';
import CyrLoader from '@/components/ui/CyrLoader/CyrLoader';
import CyrButton from '@/components/ui/CyrButton/CyrButton';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import useUser from '@/hooks/useUser';
import useLogout from '@/hooks/useLogout';

const ProfilePage = () => {
  const { isLoading, data: user } = useUser();
  const logout = useLogout();

  if (!user || isLoading) {
    return <CyrLoader />;
  }

  return (
    <div className={styles.profile}>
      <ProfileInfo user={user?.data}>
        <CyrButton icon onClick={() => logout()}>
          <ArrowLeftOnRectangleIcon />
        </CyrButton>
      </ProfileInfo>
    </div>
  );
};

export default ProfilePage;
