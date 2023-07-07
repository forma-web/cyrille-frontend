import { authSchema } from 'entities/Auth';

export const loginSchema = authSchema.pick({
  email: true,
  password: true,
});
