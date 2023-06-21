import { TRegisterValues } from '../model/types';
import { TFields } from '@/shared/types/form';
import { loginFields } from './loginFields';

// TODO: rewrite on zod or yup
export const registerFields: TFields<TRegisterValues> = {
  ...(loginFields as unknown as TFields<TRegisterValues>),
  name: {
    name: 'name',
    label: 'Name',
    options: {
      required: 'This field must be filled',
    },
  },
};
