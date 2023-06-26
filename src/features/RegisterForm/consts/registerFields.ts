import { authFields } from 'entities/Auth';
import { TRegisterValues } from '../model/types';
import { TFields } from '@/shared/types/form';

const { name, email, password } = authFields;

export const registerFields: TFields<TRegisterValues> = {
  name,
  email,
  password,
} as const;
