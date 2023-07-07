import { TUser } from 'entities/User';
import { TMeta } from 'shared/types/api';
import { z } from 'zod';
import { authSchema } from '../consts/authSchema';

export type TAuth = {
  data: TUser;
  meta: TMeta;
};

export type TAuthValues = z.infer<typeof authSchema>;
