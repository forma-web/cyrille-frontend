import type { BookDetails } from '../types';
import type { ApiResponse } from '@shared/types/api';
import { useApi } from '@shared/lib/composables/useApi';

type BookResponse = ApiResponse<BookDetails>;

export const getBook = async (id: number) =>
  useApi<BookResponse>(`books/${id}`);
