import { authSchema } from 'entities/Auth';

export const emailInputSchema = authSchema.pick({
  email: true,
});
