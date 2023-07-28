import { z } from 'zod';
import { changeNameSchema } from '../consts/changeNameSchema';
import { changePasswordSchema } from '../consts/changePasswordSchema';
import { changeEmailSchema } from '../consts/changeEmailSchema';

export type TChangeNameValues = z.infer<typeof changeNameSchema>;
export type TChangePasswordValues = z.infer<typeof changePasswordSchema>;
export type TChangeEmailValues = z.infer<typeof changeEmailSchema>;
