import { useInitialForm } from '@/shared/lib';
import { TChangeEmailValues } from '../types';
import { changeEmailSchema } from '../../consts/changeEmailSchema';
import { useUser } from '@/entities/User';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserQuery } from '../services/updateUserQuery';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/shared/consts/routers';

export const useChangeEmail = () => {
  const { data: user } = useUser();

  const navigate = useNavigate();
  const client = useQueryClient();

  const { mutate: handleSubmit } = useMutation({
    mutationFn: (data: TChangeEmailValues) => updateUserQuery(data),
    onSuccess: ({ data }) => {
      client.setQueriesData(['user'], () => ({
        data,
      }));
      client.invalidateQueries({
        queryKey: ['user'],
        refetchType: 'none',
      });
      navigate(`/${AppRoutes.profile}`);
    },
  });

  const email = user?.data.email;

  return {
    ...useInitialForm<TChangeEmailValues>({
      schema: changeEmailSchema,
      handleSubmit,
      formOptions: email
        ? {
            defaultValues: {
              email,
            },
          }
        : undefined,
    }),
  };
};
