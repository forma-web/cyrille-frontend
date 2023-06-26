import { z } from 'zod';
import { registerSchema } from '../consts/registerSchema';

export type TRegisterValues = z.infer<typeof registerSchema>;
