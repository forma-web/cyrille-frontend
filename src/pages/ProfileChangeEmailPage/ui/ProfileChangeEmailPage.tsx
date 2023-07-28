import { useMultistepForm } from 'shared/lib/hooks/useMultistepForm';
import { ProfileConfirmOldEmailForm } from '@/features/ProfileForm';
import { ProfileChangeEmailForm } from '@/features/ProfileForm';

export const ProfileChangeEmailPage = () => {
  const { currentStepIndex, go } = useMultistepForm(2);

  return (
    <>
      {currentStepIndex === 0 && (
        <ProfileConfirmOldEmailForm handleSuccess={go} />
      )}
      {currentStepIndex === 1 && <ProfileChangeEmailForm />}
    </>
  );
};
