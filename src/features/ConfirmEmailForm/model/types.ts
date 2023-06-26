import { z } from 'zod';
import { confirmEmailSchema } from '../consts/confirmEmailSchema';

export type TConfirmEmailValues = z.infer<typeof confirmEmailSchema>;
