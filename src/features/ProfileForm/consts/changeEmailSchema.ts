import { z } from 'zod';
import { FIELD_VALIDATION_RULES } from 'shared/consts/validations';

const { email } = FIELD_VALIDATION_RULES;

export const changeEmailSchema = z.object({ email });
