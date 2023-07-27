import { useInitialForm } from '@/shared/lib';
import { TChangeNameValues } from '../types';
import { changeNameSchema } from '../../consts/changeNameSchema';
import { useUser } from '@/entities/User';

export const useChangeName = () => {
  const { data: user } = useUser();

  const name = user?.data.name;

  return {
    ...useInitialForm<TChangeNameValues>({
      schema: changeNameSchema,
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
