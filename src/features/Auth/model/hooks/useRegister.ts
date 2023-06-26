import { TRegisterValues } from '../types';
import { useAuthQuery } from 'entities/Auth';
import { registerUserQuery } from '../services/registerUserQuery';
import { registerSchema } from '../../consts/registerSchema';

export const useRegister = () =>
  useAuthQuery<TRegisterValues>(registerUserQuery, registerSchema);
