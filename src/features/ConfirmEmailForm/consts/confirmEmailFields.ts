import { TFields } from 'shared/types/form';
import { TConfirmEmailValues } from '../model/types';

export const confirmEmailFields: TFields<TConfirmEmailValues> = {
  code: {
    name: 'code',
    label: 'Verification code',
  },
} as const;
