import { z } from 'zod';
import { changeNameSchema } from '../consts/changeNameSchema';

export type TChangeNameValues = z.infer<typeof changeNameSchema>;
