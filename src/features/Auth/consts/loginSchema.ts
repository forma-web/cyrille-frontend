import { z } from 'zod';

export const loginSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: 'This field must be filled' })
      .email({ message: 'Enter valid email' }),
    password: z
      .string()
      .min(1, { message: 'This field must be filled' })
      .min(8, { message: 'Password must be greater than 8' }),
  })
  .required();
