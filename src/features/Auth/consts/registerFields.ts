import { TRegisterValues } from '../model/types';
import { TFields } from '@/shared/types/form';
import { loginFields } from './loginFields';

export const registerFields: TFields<TRegisterValues> = {
  ...(loginFields as unknown as TFields<TRegisterValues>),
  name: {
    name: 'name',
    label: 'Name',
  },
};
