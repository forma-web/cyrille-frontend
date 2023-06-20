import { authQueryTemplate } from 'entities/Auth';
import { TLoginValues } from '../types';

export const loginUserQuery = authQueryTemplate<TLoginValues>('login');
