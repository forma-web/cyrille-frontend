import { useMultistepForm } from 'shared/lib/hooks/useMultistepForm';
import { EmailInputForm } from '../EmailInputForm/EmailInputForm';
import { ConfirmEmailForm } from 'features/ConfirmEmailForm';
import { useCallback, useState } from 'react';
import { ResetPasswordForm } from '../ResetPasswordForm/ResetPasswordForm';
import { useMutation } from '@tanstack/react-query';
import { verifyEmailQuery } from '../../model/services/verifyEmailQuery';
import { checkEmailQuery } from '../../model/services/checkEmailQuery';

export const ForgotPassword = () => {
  const [email, setEmail] = useState<string>();
  const { currentStepIndex, go, back } = useMultistepForm(3);

  const handleEmailInputSuccess = useCallback(
    (email: string) => {
      setEmail(() => email);
      go();
    },
    [go],
  );

  const { mutate: handleResendCode } = useMutation({
    mutationFn: verifyEmailQuery,
  });

  const onResendCode = useCallback(() => {
    email && handleResendCode(email);
  }, [handleResendCode, email]);

  const handleCheckEmail = useCallback(
    ({ code }: { code: string }) => {
      if (!email) return Promise.reject();
      return checkEmailQuery({ email, code });
    },
    [email],
  );

  return (
    <>
      {currentStepIndex === 0 && (
        <EmailInputForm handleSuccess={handleEmailInputSuccess} />
      )}
      {currentStepIndex === 1 && (
        <ConfirmEmailForm
          mutationFn={handleCheckEmail}
          handleResendCode={onResendCode}
          handleSuccess={go}
          email={email!}
          goToPrevForm={back}
        />
      )}
      {currentStepIndex === 2 && <ResetPasswordForm email={email!} />}
    </>
  );
};
