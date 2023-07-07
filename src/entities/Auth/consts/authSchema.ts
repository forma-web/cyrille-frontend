import { z } from 'zod';
import { FIELD_VALIDATION_RULES } from 'shared/consts/validations';

const { name, email, password } = FIELD_VALIDATION_RULES;

export const authSchema = z.object({
  name,
  email,
  password,
});
