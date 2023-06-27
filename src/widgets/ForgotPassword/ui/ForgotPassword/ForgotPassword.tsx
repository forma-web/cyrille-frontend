import { useMultistepForm } from 'shared/lib/hooks/useMultistepForm';
import { EmailInputForm } from '../EmailInputForm/EmailInputForm';
import { ConfirmEmailForm } from 'features/ConfirmEmailForm';
import { useCallback, useState } from 'react';
import { ResetPasswordForm } from '../ResetPasswordForm/ResetPasswordForm';

export const ForgotPassword = () => {
  const [email, setEmail] = useState<string>();
  const { currentStepIndex, go, back } = useMultistepForm(3);

  const handleEmailInputSuccess = useCallback(
    ({ email }: { email: string }) => {
      setEmail(() => email);
      go();
    },
    [go],
  );

  return (
    <>
      {currentStepIndex === 0 && (
        <EmailInputForm handleSuccess={handleEmailInputSuccess} />
      )}
      {currentStepIndex === 1 && (
        <ConfirmEmailForm email={email!} goToPrevForm={back} />
      )}
      {currentStepIndex === 2 && <ResetPasswordForm />}
    </>
  );
};
