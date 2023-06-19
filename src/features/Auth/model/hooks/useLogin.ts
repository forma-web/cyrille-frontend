import { loginUser } from '@/services/auth';
import { TLoginValues } from '../types';
import { useAuthQuery } from 'entities/Auth';

export const useLogin = () => useAuthQuery<TLoginValues>(loginUser);
