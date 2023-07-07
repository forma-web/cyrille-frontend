import { authFields } from 'entities/Auth';
import { TEmailInputValues } from '../model/types';
import { TFields } from '@/shared/types/form';

const { email } = authFields;

export const emailInputFields: TFields<TEmailInputValues> = {
  email,
} as const;
