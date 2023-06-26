import { TLoginValues } from '../model/types';
import { TFields } from '@/shared/types/form';

export const loginFields: TFields<TLoginValues> = {
  email: {
    name: 'email',
    label: 'Email',
  },
  password: {
    name: 'password',
    label: 'Password',
  },
};
