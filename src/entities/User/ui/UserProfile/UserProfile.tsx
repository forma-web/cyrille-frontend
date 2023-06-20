import { memo } from 'react';
import { TUser } from '../../model/types';
import { Profile } from 'entities/Profile';
import { CyrButton } from '/shared/ui';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { useLogout } from '../../model/hooks/useLogout';

export const UserProfile = memo(({ user }: { user?: TUser }) => {
  const logout = useLogout();

  if (!user) return null;

  const { name, email } = user;

  return (
    <Profile name={name} caption={email} small>
      <CyrButton icon onClick={() => logout()}>
        <ArrowLeftOnRectangleIcon />
      </CyrButton>
    </Profile>
  );
});

UserProfile.displayName = 'UserProfile';
