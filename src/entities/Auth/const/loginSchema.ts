import { FIELD_VALIDATION_RULES } from '@shared/const/validation';
import { object } from 'valibot';

const { email, password } = FIELD_VALIDATION_RULES;

export const loginSchema = object({
  email,
  password,
});
