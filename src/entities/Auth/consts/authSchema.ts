import { z } from 'zod';

export const authSchema = z
  .object({
    email: z
      .string()
      .nonempty({ message: 'This field must be filled' })
      .email({ message: 'Enter valid email' }),
    password: z
      .string()
      .nonempty({ message: 'This field must be filled' })
      .min(8, { message: 'Password must be greater than 8' }),
    name: z.string().nonempty({ message: 'This field must be filled' }),
  })
  .required();
