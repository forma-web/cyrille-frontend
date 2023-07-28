import { TFields } from '@/shared/types/form';
import { TChangePasswordValues } from '../model/types';

export const changePasswordFields: TFields<TChangePasswordValues> = {
  current_password: {
    name: 'current_password',
    label: 'Current password',
  },
  password: {
    name: 'password',
    label: 'New password',
  },
  password_confirmation: {
    name: 'password_confirmation',
    label: 'Confirm password',
  },
} as const;
