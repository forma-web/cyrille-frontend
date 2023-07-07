import { useMultistepForm } from 'shared/lib/hooks/useMultistepForm';
import { RegisterForm } from 'features/RegisterForm';
import { ConfirmEmailForm } from 'features/ConfirmEmailForm';
import { useCallback, useState } from 'react';
import { TUser } from 'entities/User';

export const Register = () => {
  const [userData, setUserData] = useState<TUser>();
  const { currentStepIndex, go, back } = useMultistepForm(2);

  const handleRegisterSuccess = useCallback(
    (user: TUser) => {
      setUserData(() => user);
      go();
    },
    [go],
  );

  return (
    <>
      {currentStepIndex === 0 && (
        <RegisterForm handleSuccess={handleRegisterSuccess} />
      )}
      {currentStepIndex === 1 && (
        <ConfirmEmailForm email={userData!.email} goToPrevForm={back} />
      )}
    </>
  );
};
