import { TFields } from 'shared/types/form';
import { TResetPasswordValues } from '../model/types';

export const resetPasswordFields: TFields<TResetPasswordValues> = {
  password: {
    name: 'password',
    label: 'New password',
  },
  confirm: {
    name: 'confirm',
    label: 'Confirm password',
  },
} as const;
