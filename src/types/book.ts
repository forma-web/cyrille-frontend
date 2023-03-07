export type TBookItem = {
  title: string;
  authors?: string[];
  description?: string;
  coverURL?: string;
};

export type TBookList = {
  books: TBookItem[];
};
