export interface ApiToken {
  token: string;
  token_type: string;
  ttl: number;
}

export interface ApiResponse<T> {
  data: T;
}

export type ApiPagination<T> = ApiResponse<T[]> & {
  links: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  meta: {
    path: string;
    per_page: number;
    next_cursor: string | null;
    prev_cursor: string | null;
  };
};
