import { useInitialForm } from '@/shared/lib';
import { TConfirmEmailValues } from '../types';
import { confirmEmailSchema as schema } from '../../consts/confirmEmailSchema';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/shared/consts/routers';
import { useState } from 'react';
import { confirmEmailQuery } from '../services/confirmEmailQuery';

export const useConfirmEmail = () => {
  const navigate = useNavigate();
  const [responseError, setResponseError] = useState<string>();

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationFn: confirmEmailQuery,
    onSuccess: () => {
      navigate(AppRoutes.home);
    },
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
