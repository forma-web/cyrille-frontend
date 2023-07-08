import { z } from 'zod';
import { confirmEmailSchema } from '../consts/confirmEmailSchema';
import { TMeta } from '@/shared/types/api';

export type TConfirmEmailValues = z.infer<typeof confirmEmailSchema>;

export type TUseConfirmEmailProps = {
  tokenData?: TMeta;
  handleSuccess: () => void;
  handleError?: (error: Error) => void;
};
