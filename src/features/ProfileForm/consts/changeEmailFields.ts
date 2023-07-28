import { TFields } from '@/shared/types/form';
import { TChangeEmailValues } from '../model/types';

export const changeEmailFields: TFields<TChangeEmailValues> = {
  email: {
    name: 'email',
    label: 'Your new email',
  },
} as const;
