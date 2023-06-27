import { z } from 'zod';
import { FIELD_VALIDATION_RULES } from 'shared/consts/validations';

const { password, confirm } = FIELD_VALIDATION_RULES;

export const resetPasswordSchema = z
  .object({ password, confirm })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  });
