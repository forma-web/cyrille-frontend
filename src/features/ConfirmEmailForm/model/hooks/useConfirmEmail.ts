import { useMutation } from '@tanstack/react-query';
import { TConfirmEmailValues, TUseConfirmEmailProps } from '../types';
import { jwt, useMutationForm } from 'shared/lib';
import { useState } from 'react';
import { verifyRegistrationEmailQuery } from '../services/verifyRegistrationEmailQuery';
import { confirmEmailSchema } from '../../consts/confirmEmailSchema';

export const useConfirmEmail = ({
  tokenData,
  handleSuccess,
  handleError,
}: TUseConfirmEmailProps) => {
  const [responseError, setResponseError] = useState<string>();

  const { mutate, isSuccess, isLoading } = useMutation<
    void,
    Error,
    TConfirmEmailValues
  >({
    mutationFn: ({ code }) =>
      verifyRegistrationEmailQuery({
        token: tokenData ? jwt.generateJWTToken(tokenData) : '',
        code,
      }),
    onSuccess: handleSuccess,
    onError: (err) => {
      setResponseError(() => (err as Error).message);
      handleError && handleError(err as Error);
    },
  });

  return {
    ...useMutationForm<TConfirmEmailValues, void>(mutate, confirmEmailSchema),
    responseError,
    isSuccess,
    isLoading,
  };
};
