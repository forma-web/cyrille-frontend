import { z } from 'zod';
import { loginSchema } from './loginSchema';

export const registerSchema = loginSchema.merge(
  z
    .object({
      name: z.string().min(1, { message: 'This field must be filled' }),
    })
    .required(),
);
