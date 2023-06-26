import { z } from 'zod';
import { CONFIRM_CODE_LENGTH } from './confirmCode';

export const confirmEmailSchema = z
  .object({
    code: z
      .string()
      .length(CONFIRM_CODE_LENGTH, {
        message: `Verification code must contain ${CONFIRM_CODE_LENGTH} digits`,
      })
      .regex(/^\d+$/, {
        message: 'Verification code must consist of numbers only',
      }),
  })
  .required();
