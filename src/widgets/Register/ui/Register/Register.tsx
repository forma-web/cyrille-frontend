import { RegisterForm } from 'features/RegisterForm';
import { ConfirmEmailForm } from 'features/ConfirmEmailForm';
import { BackToRegisterFormLink } from '../BackToRegisterFormLink/BackToRegisterFormLink';
import { useRegisterWithVerify } from '../../model/hooks/useRegisterWithVerify';

export const Register = () => {
  const {
    userData,
    currentStepIndex,
    tokenData,
    back,
    handleRegisterSuccess,
    handleConfirmEmailSuccess,
  } = useRegisterWithVerify();

  return (
    <>
      {currentStepIndex === 0 && (
        <RegisterForm handleSuccess={handleRegisterSuccess} />
      )}
      {currentStepIndex === 1 && (
        <ConfirmEmailForm
          tokenData={tokenData}
          email={userData!.email}
          handleSuccess={handleConfirmEmailSuccess}
          renderFooterContent={() => <BackToRegisterFormLink back={back} />}
        />
      )}
    </>
  );
};
