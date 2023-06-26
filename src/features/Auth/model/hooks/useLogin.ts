import { TLoginValues } from '../types';
import { useAuthQuery } from 'entities/Auth';
import { loginUserQuery } from '../services/loginUserQuery';
import { loginSchema } from '../../consts/loginSchema';

export const useLogin = () =>
  useAuthQuery<TLoginValues>(loginUserQuery, loginSchema);
