import type { ApiPagination } from '@shared/types/api';
import { useApi } from '@shared/lib/composables/useApi';
import type { Book } from '../types';

type BooksResponse = ApiPagination<Book>;

export const getAllBooks = async () => useApi<BooksResponse>('books');
