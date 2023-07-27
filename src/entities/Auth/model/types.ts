import { TUser } from 'entities/User';
import { TMeta } from 'shared/types/api';
import { z } from 'zod';
import { authSchema } from '../consts/authSchema';
import { registerSchema } from '../consts/registerSchema';

export type TAuth = {
  data: TUser;
  meta: TMeta;
};

export type TAuthValues = z.infer<typeof authSchema>;

export type TRegisterValues = z.infer<typeof registerSchema>;

export type TUseRegisterProps = {
  handleSuccess?: (user: TUser) => void;
  handleError?: (error: Error) => void;
};
