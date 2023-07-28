import { z } from 'zod';
import { FIELD_VALIDATION_RULES } from 'shared/consts/validations';

const { password, confirm } = FIELD_VALIDATION_RULES;

export const changePasswordSchema = z
  .object({
    current_password: password,
    password,
    password_confirmation: confirm,
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ['password_confirmation'],
  });
