import { ProfileChangeNameForm } from '@/features/ProfileForm';
import { useMultistepForm } from '@/shared/lib/hooks/useMultistepForm';

export const ProfileChangeNamePage = () => {
  const { currentStepIndex, go, back } = useMultistepForm(2);

  return (
    <>
      {currentStepIndex === 0 && <ProfileChangeNameForm />}
      {/* {currentStepIndex === 1 && (
        <ConfirmEmailForm email={userData!.email} goToPrevForm={back} />
      )} */}
    </>
  );
};
