import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';
import { TAuth } from '../types';
import { jwt, useInitialForm } from 'shared/lib';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getRouteHome } from 'shared/consts/routers';
import { z } from 'zod';

export const useAuthQuery = <T extends FieldValues>(
  mutationFn: (body: T) => Promise<TAuth>,
  schema: z.ZodTypeAny,
) => {
  const [responseError, setResponseError] = useState<string>();
  const client = useQueryClient();

  const navigate = useNavigate();

  const {
    mutate: handleSubmit,
    isSuccess,
    isLoading,
  } = useMutation({
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
      navigate(getRouteHome());
    },
    onError: (err) => {
      setResponseError(() => (err as Error).message);
    },
  });

  return {
    ...useInitialForm<T, TAuth>({ handleSubmit, schema }),
    responseError,
    isSuccess,
    isLoading,
  };
};
