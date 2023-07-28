import { ConfirmEmailForm } from '@/features/ConfirmEmailForm';
import { useCallback, useEffect } from 'react';
import { verifyOldEmailQuery } from '../model/services/verifyOldEmailQuery';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/shared/consts/routers';
import { CyrLoader } from '@/shared/ui';
import { useUser } from '@/entities/User';
import { checkOldEmailQuery } from '../model/services/checkOldEmailQuery';

type TProfileConfirmOldEmailFormProps = {
  handleSuccess?: () => void;
};

export const ProfileConfirmOldEmailForm = ({
  handleSuccess,
}: TProfileConfirmOldEmailFormProps) => {
  const { isLoading, data: user } = useUser();

  const navigate = useNavigate();

  const back = useCallback(() => {
    navigate(`/${AppRoutes.profile}`);
  }, [navigate]);

  useEffect(() => {
    verifyOldEmailQuery();
  }, []);

  if (!user || isLoading) {
    return <CyrLoader />;
  }

  return (
    <ConfirmEmailForm
      handleSuccess={handleSuccess}
      mutationFn={checkOldEmailQuery}
      email={user.data.email}
      handleResendCode={verifyOldEmailQuery}
      goToPrevForm={back}
      backLinkTest="Back to profile page"
    />
  );
};
