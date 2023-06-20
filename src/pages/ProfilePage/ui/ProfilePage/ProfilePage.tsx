import styles from './ProfilePage.module.scss';
import { CyrLoader, CyrButton } from 'shared/ui';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import useUser from '@/hooks/useUser';
import useLogout from '@/hooks/useLogout';
import { Profile } from 'entities/Profile';

const ProfilePage = () => {
  const { isLoading, data: user } = useUser();
  const logout = useLogout();

  if (!user || isLoading) {
    return <CyrLoader />;
  }

  const { name, email } = user!.data;

  return (
    <div className={styles.profile}>
      <Profile name={name} caption={email} small>
        <CyrButton icon onClick={() => logout()}>
          <ArrowLeftOnRectangleIcon />
        </CyrButton>
      </Profile>
    </div>
  );
};

export default ProfilePage;
