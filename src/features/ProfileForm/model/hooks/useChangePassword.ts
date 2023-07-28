import { useInitialForm } from '@/shared/lib';
import { TChangePasswordValues } from '../types';
import { useMutation } from '@tanstack/react-query';
import { updateUserQuery } from '../services/updateUserQuery';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/shared/consts/routers';
import { changePasswordSchema } from '../../consts/changePasswordSchema';
import { useState } from 'react';

export const useChangePassword = () => {
  const [responseError, setResponseError] = useState<string>();
  const navigate = useNavigate();

  const { mutate: handleSubmit } = useMutation({
    mutationFn: (data: TChangePasswordValues) => updateUserQuery(data),
    onSuccess: () => {
      navigate(`/${AppRoutes.profile}`);
    },
    onError: (err: Error) => {
      setResponseError(() => err.message);
    },
  });

  return {
    ...useInitialForm<TChangePasswordValues>({
      schema: changePasswordSchema,
      handleSubmit,
    }),
    responseError,
  };
};
