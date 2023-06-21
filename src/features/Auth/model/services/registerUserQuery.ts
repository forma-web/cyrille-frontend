import { authQueryTemplate } from 'entities/Auth';
import { TRegisterValues } from '../types';

export const registerUserQuery = authQueryTemplate<TRegisterValues>('register');
