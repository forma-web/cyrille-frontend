import { TFields } from '@/shared/types/form';
import { TChangeNameValues } from '../model/types';

export const changeNameFields: TFields<TChangeNameValues> = {
  name: {
    name: 'name',
    label: 'Your name',
  },
} as const;
