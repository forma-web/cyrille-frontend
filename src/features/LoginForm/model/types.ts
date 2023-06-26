import { z } from 'zod';
import { loginSchema } from '../consts/loginSchema';

export type TLoginValues = z.infer<typeof loginSchema>;
