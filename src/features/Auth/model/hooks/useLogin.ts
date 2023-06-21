import { TLoginValues } from '../types';
import { useAuthQuery } from 'entities/Auth';
import { loginUserQuery } from '../services/loginUserQuery';

export const useLogin = () => useAuthQuery<TLoginValues>(loginUserQuery);
