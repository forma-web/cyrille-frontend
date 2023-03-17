import { TResponse } from './response';

export type TBook = {
  id: string | number;
  name: string;
  description?: string;
  thumbnail_image?: string;
  thumbnail_component?: string;
  language?: string;
  authors?: TArtist[];
  genre?: string;
  release_date?: string;
} & TArtists;

export type TRole = {
  role: string;
  notes?: string;
};

export type TArtist = {
  id: string | number;
  name: string;
  avatar?: string;
  project?: TRole;
};

export type TArtists = {
  artists?: TArtist[];
};

export type TBookItem = {
  isLarge?: boolean;
} & TBook;

export type TBookList = {
  books: TBookItem[];
};

export type TBookCarousel = {
  title?: string;
} & TBookList;

export type TBookResponse = TResponse<TBook>;
