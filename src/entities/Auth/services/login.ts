import type { LoginValues } from '@entities/Auth/types';
import { useApi } from '@shared/lib/composables/useApi';

const login = async (data: LoginValues) =>
  useApi('/auth/login', { method: 'POST', body: data });
