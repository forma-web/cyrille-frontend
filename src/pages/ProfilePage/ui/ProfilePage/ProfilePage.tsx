import { CyrDivide, CyrLoader } from 'shared/ui';
import { UserProfile, useUser } from 'entities/User';
import { ProfileSettings } from '@/widgets/ProfileSettings/ui/ProfileSettings/ProfileSettings';

const ProfilePage = () => {
  const { isLoading, data: user } = useUser();

  if (!user || isLoading) {
    return <CyrLoader />;
  }

  return (
    <div className="wrapper">
      <UserProfile user={user?.data} />
      <CyrDivide total={2} />
      <ProfileSettings />
    </div>
  );
};

export default ProfilePage;
