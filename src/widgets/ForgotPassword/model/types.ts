import { z } from 'zod';
import { emailInputSchema } from '../consts/emailInputSchema';
import { resetPasswordSchema } from '../consts/resetPasswordSchema';

export type TEmailInputValues = z.infer<typeof emailInputSchema>;
export type TResetPasswordValues = z.infer<typeof resetPasswordSchema>;
