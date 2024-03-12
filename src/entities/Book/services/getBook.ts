import type { ApiResponse } from '@shared/types/api';
import { useApi } from '@shared/lib/composables/useApi';
import type { BookDetails } from '../types';

type BookResponse = ApiResponse<BookDetails>;

export function getBook(id: number) {
  return useApi<BookResponse>(`books/${id}`);
}
