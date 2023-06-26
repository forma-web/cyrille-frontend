import { z } from 'zod';
import { loginSchema } from '../consts/loginSchema';
import { registerSchema } from '../consts/registerSchema';

export type TLoginValues = z.infer<typeof loginSchema>;
export type TRegisterValues = z.infer<typeof registerSchema>;
