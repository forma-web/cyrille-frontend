export type TMeta = {
  token: string;
  token_type: string;
  ttl: number;
};

export type TPagination<T> = TResponse<T[]> & {
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

export type TResponse<T> = {
  data: T;
};
