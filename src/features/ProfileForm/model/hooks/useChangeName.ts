import { useInitialForm } from '@/shared/lib';
import { TChangeNameValues } from '../types';
import { changeNameSchema } from '../../consts/changeNameSchema';
import { useUser } from '@/entities/User';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserQuery } from '../services/updateUserQuery';
import { useNavigate } from 'react-router-dom';

export const useChangeName = () => {
  const { data: user } = useUser();

  const navigate = useNavigate();
  const client = useQueryClient();

  const { mutate: handleSubmit } = useMutation({
    mutationFn: ({ name }: TChangeNameValues) => updateUserQuery({ name }),
    onSuccess: ({ data }) => {
      client.setQueriesData(['user'], () => ({
        data,
      }));
      client.invalidateQueries({
        queryKey: ['user'],
        refetchType: 'none',
      });
      navigate('..');
    },
  });

  const name = user?.data.name;

  return {
    ...useInitialForm<TChangeNameValues>({
      schema: changeNameSchema,
      handleSubmit,
      formOptions: name
        ? {
            defaultValues: {
              name,
            },
          }
        : undefined,
    }),
  };
};
