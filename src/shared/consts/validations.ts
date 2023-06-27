import { z } from 'zod';

export const FIELD_VALIDATION_RULES = {
  name: z.string().nonempty({ message: 'This field must be filled' }),
  email: z
    .string()
    .nonempty({ message: 'This field must be filled' })
    .email({ message: 'Enter valid email' }),
  password: z
    .string()
    .nonempty({ message: 'This field must be filled' })
    .min(8, { message: 'Password must be greater than 8' }),
  confirm: z.string(),
};
