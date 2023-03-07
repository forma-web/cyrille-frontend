export type TBookItem = {
  title: string;
  authors?: string[];
  description?: string;
  coverURL?: string;
  isLarge?: boolean;
};

export type TBookList = {
  books: TBookItem[];
};
