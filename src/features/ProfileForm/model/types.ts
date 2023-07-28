import { z } from 'zod';
import { changeNameSchema } from '../consts/changeNameSchema';
import { changePasswordSchema } from '../consts/changePasswordSchema';

export type TChangeNameValues = z.infer<typeof changeNameSchema>;
export type TChangePasswordValues = z.infer<typeof changePasswordSchema>;
