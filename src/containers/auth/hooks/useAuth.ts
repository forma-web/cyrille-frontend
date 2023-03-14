import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';
import useMutationForm from '@/hooks/useMutationForm';
import { TAuth } from '@/types/auth';
import setJWTToken from '@/utils/setJWTToken';
import { redirect } from 'react-router-dom';

const useAuth = <T extends FieldValues>(
  mutationFn: (body: T) => Promise<TAuth>,
) => {
  const client = useQueryClient();

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
      setJWTToken(meta);
    },
    onError: (err) => {
      //   setResponseError(
      //     () =>
      //       responseErrors?.[(err as Error).message] ??
      //       'Произошла неизвестная ошибка. Повторите попытку'
      //   );
    },
  });

  return { ...useMutationForm<T, TAuth>(mutate), isSuccess, isLoading };
};

export default useAuth;
