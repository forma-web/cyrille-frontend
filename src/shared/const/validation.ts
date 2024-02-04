import { email, minLength, string } from 'valibot';

export const FIELD_VALIDATION_RULES = {
  name: string([minLength(1, 'Name is required')]),
  email: string([minLength(1, 'Email is required'), email('Invalid email')]),
  password: string([minLength(6, 'Password must be at least 6 characters')]),
};
