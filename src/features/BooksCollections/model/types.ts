import { TBook } from 'entities/Book';

export type TBookItem = {
  isLarge?: boolean;
} & TBook;

export type TBookList = {
  books: TBookItem[];
};

export type TBookCarousel = {
  title?: string;
} & TBookList;
