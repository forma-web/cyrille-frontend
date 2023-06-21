import { TUser } from 'entities/User';
import { TMeta } from 'shared/types/api';

export type TAuth = {
  data: TUser;
  meta: TMeta;
};
