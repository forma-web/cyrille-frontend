import { TLoginValues } from '../model/types';
import { TFields } from '@/shared/types/form';

export const loginFields: TFields<TLoginValues> = {
  email: {
    name: 'email',
    label: 'Email',
    options: {
      required: 'This field must be filled',
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Enter valid email',
      },
    },
  },
  password: {
    name: 'password',
    label: 'Password',
    options: {
      required: 'This field must be filled',
      minLength: {
        value: 8,
        message: 'Password must be greater than 8',
      },
    },
  },
};
