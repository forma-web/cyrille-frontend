import { authFields } from 'entities/Auth';
import { TLoginValues } from '../model/types';
import { TFields } from '@/shared/types/form';

const { email, password } = authFields;

export const loginFields: TFields<TLoginValues> = {
  email,
  password,
} as const;
