export type TBookItem = {
  id: string | number;
  title: string;
  authors?: string[];
  description?: string;
  coverURL?: string;
  isLarge?: boolean;
};

export type TBookList = {
  books: TBookItem[];
};

export type TBookCarousel = {
  title?: string;
} & TBookList;
