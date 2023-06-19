import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';
import { TAuth } from '../types';
import { jwt, useMutationForm } from 'shared/lib';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AppRoutes } from 'shared/consts/routers';

export const useAuthQuery = <T extends FieldValues>(
  mutationFn: (body: T) => Promise<TAuth>,
) => {
  const [responseError, setResponseError] = useState<string>();
  const client = useQueryClient();

  const navigate = useNavigate();

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationFn,
    onSuccess: ({ data, meta }) => {
      client.setQueriesData(['user'], () => ({
        data,
      }));
      client.invalidateQueries({
        queryKey: ['user'],
        refetchType: 'none',
      });
      jwt.setJWTToken(meta);
      navigate(AppRoutes.home);
    },
    onError: (err) => {
      setResponseError(() => (err as Error).message);
    },
  });

  return {
    ...useMutationForm<T, TAuth>(mutate),
    responseError,
    isSuccess,
    isLoading,
  };
};
