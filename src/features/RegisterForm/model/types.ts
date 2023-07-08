import { z } from 'zod';
import { registerSchema } from '../consts/registerSchema';
import { TAuth } from '@/entities/Auth';

export type TRegisterValues = z.infer<typeof registerSchema>;

export type TUseRegisterProps = {
  handleSuccess: (response: TAuth) => void;
  handleError?: (error: Error) => void;
};

export type TRegisterFormProps = TUseRegisterProps;
