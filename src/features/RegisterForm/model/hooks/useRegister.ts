import { useMutation } from '@tanstack/react-query';
import { TRegisterValues, TUseRegisterProps } from '../types';
import { jwt, useMutationForm } from 'shared/lib';
import { useState } from 'react';
import { registerUserQuery } from '../services/registerUserQuery';
import { registerSchema } from '../../consts/registerSchema';
import { TAuth } from 'entities/Auth';

export const useRegister = ({
  handleSuccess,
  handleError,
}: TUseRegisterProps) => {
  const [responseError, setResponseError] = useState<string>();

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationFn: registerUserQuery,
    onSuccess: ({ data, meta }) => {
      jwt.setJWTToken(meta);
      handleSuccess && handleSuccess(data);
    },
    onError: (err) => {
      setResponseError(() => (err as Error).message);
      handleError && handleError(err as Error);
    },
  });

  return {
    ...useMutationForm<TRegisterValues, TAuth>(mutate, registerSchema),
    responseError,
    isSuccess,
    isLoading,
  };
};

// useAuthQuery<TRegisterValues>(registerUserQuery, registerSchema);