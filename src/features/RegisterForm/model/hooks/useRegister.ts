import { useInitialForm } from 'shared/lib';
import { useCallback, useState } from 'react';
import { TAuth, TRegisterValues, useRegisterQuery } from 'entities/Auth';
import { TRegisterFormProps } from '../types';
import { registerSchema } from '@/entities/Auth';

export const useRegister = ({
  handleSuccess,
  handleError,
  setUserData,
}: TRegisterFormProps) => {
  const [responseError, setResponseError] = useState<string>();

  const { mutate, isSuccess, isLoading } = useRegisterQuery({
    handleSuccess,
    handleError: (error: Error) => {
      setResponseError(() => error.message);
      handleError && handleError(error);
    },
  });

  const handleSubmit = useCallback(
    (data: TRegisterValues) => {
      mutate(data);
      setUserData(data);
    },
    [mutate, setUserData],
  );

  return {
    ...useInitialForm<TRegisterValues, TAuth>({
      handleSubmit,
      schema: registerSchema,
    }),
    responseError,
    isSuccess,
    isLoading,
  };
};
