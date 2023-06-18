import { TUser } from './user';
import { TMeta } from 'shared/types/api';

export type TLoginValues = {
  email: string;
  password: string;
};

export type TRegisterValues = TLoginValues & {
  name: string;
};

export type TAuth = {
  data: TUser;
  meta: TMeta;
};
