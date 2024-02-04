import type { Input } from 'valibot';
import type { loginSchema } from './const/loginSchema';

export type LoginValues = Input<typeof loginSchema>;
