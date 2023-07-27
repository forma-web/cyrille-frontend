import { useInitialForm } from '@/shared/lib';
import { TConfirmEmailValues } from '../types';
import { confirmEmailSchema as schema } from '../../consts/confirmEmailSchema';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

type TUseConfirmEmailProps = {
  mutationFn: (data: TConfirmEmailValues) => Promise<void>;
  onSuccess?: () => void;
};

export const useConfirmEmail = ({
  onSuccess,
  mutationFn,
}: TUseConfirmEmailProps) => {
  const [responseError, setResponseError] = useState<string>();

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationFn,
    onSuccess,
    onError: (error: Error) => {
      setResponseError(() => error.message);
    },
  });

  return {
    ...useInitialForm<TConfirmEmailValues>({
      schema,
      handleSubmit: mutate,
    }),
    isSuccess,
    isLoading,
    responseError,
  };
};
