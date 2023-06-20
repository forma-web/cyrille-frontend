import { TRegisterValues } from '../types';
import { useAuthQuery } from 'entities/Auth';
import { registerUserQuery } from '../services/registerUserQuery';

export const useRegister = () =>
  useAuthQuery<TRegisterValues>(registerUserQuery);
