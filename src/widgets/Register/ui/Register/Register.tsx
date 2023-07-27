import { useMultistepForm } from 'shared/lib/hooks/useMultistepForm';
import { RegisterForm } from 'features/RegisterForm';
import { ConfirmEmailForm } from 'features/ConfirmEmailForm';
import { useCallback, useState } from 'react';
import { TRegisterValues, useRegisterQuery } from '@/entities/Auth';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/shared/consts/routers';
import { confirmAuthEmailQuery } from '@/entities/Auth';

export const Register = () => {
  const [userData, setUserData] = useState<TRegisterValues>();
  const { currentStepIndex, go, back } = useMultistepForm(2);
  const navigate = useNavigate();

  const { mutate: handleResendCode } = useRegisterQuery();

  const handleSuccess = useCallback(() => {
    navigate(AppRoutes.home);
  }, [navigate]);

  const onResendCode = useCallback(() => {
    userData && handleResendCode(userData);
  }, [handleResendCode, userData]);

  return (
    <>
      {currentStepIndex === 0 && (
        <RegisterForm setUserData={setUserData} handleSuccess={go} />
      )}
      {currentStepIndex === 1 && (
        <ConfirmEmailForm
          email={userData?.email}
          mutationFn={confirmAuthEmailQuery}
          handleResendCode={onResendCode}
          handleSuccess={handleSuccess}
          goToPrevForm={back}
        />
      )}
    </>
  );
};
