import { TRegisterValues } from '../types';
import { registerUser } from '@/services/auth';
import { useAuthQuery } from 'entities/Auth';

export const useRegister = () => useAuthQuery<TRegisterValues>(registerUser);
