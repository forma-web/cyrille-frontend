import { z } from 'zod';
import { FIELD_VALIDATION_RULES } from 'shared/consts/validations';

const { name } = FIELD_VALIDATION_RULES;

export const changeNameSchema = z.object({ name });
