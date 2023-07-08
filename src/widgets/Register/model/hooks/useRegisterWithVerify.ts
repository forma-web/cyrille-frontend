import { useMultistepForm } from 'shared/lib/hooks/useMultistepForm';
import { useCallback, useState } from 'react';
import { TUser } from 'entities/User';
import { TAuth } from '@/entities/Auth';
import { TMeta } from '@/shared/types/api';
import { jwt } from '@/shared/lib';
import { useNavigate } from 'react-router';
import { getRouteHome } from '@/shared/consts/routers';

export const useRegisterWithVerify = () => {
  const [userData, setUserData] = useState<TUser>();
  const [tokenData, setTokenData] = useState<TMeta>();
  const navigate = useNavigate();
  const { currentStepIndex, go, back } = useMultistepForm(2);

  const handleRegisterSuccess = useCallback(
    (response: TAuth) => {
      const { data: user, meta } = response;
      setUserData(() => user);
      setTokenData(() => meta);
      go();
    },
    [go],
  );

  const handleConfirmEmailSuccess = useCallback(() => {
    if (tokenData) jwt.setJWTToken(tokenData);
    navigate(getRouteHome());
  }, [navigate, tokenData]);

  return {
    userData,
    currentStepIndex,
    tokenData,
    back,
    handleRegisterSuccess,
    handleConfirmEmailSuccess,
  };
};
