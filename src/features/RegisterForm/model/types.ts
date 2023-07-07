import { z } from 'zod';
import { registerSchema } from '../consts/registerSchema';
import { TUser } from 'entities/User';

export type TRegisterValues = z.infer<typeof registerSchema>;

export type TUseRegisterProps = {
  handleSuccess?: (user: TUser) => void;
  handleError?: (error: Error) => void;
};

export type TRegisterFormProps = TUseRegisterProps;
