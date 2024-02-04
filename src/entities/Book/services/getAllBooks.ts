import type { Book } from '../types';
import type { ApiPagination } from '@shared/types/api';
import { useApi } from '@shared/lib/composables/useApi';

type BooksResponse = ApiPagination<Book>;

export const getAllBooks = async () => useApi<BooksResponse>('books');
