import { TUser } from '@/types/user';
import { TMeta } from 'shared/types/api';

export type TAuth = {
  data: TUser;
  meta: TMeta;
};
