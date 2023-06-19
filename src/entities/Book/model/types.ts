import { TResponse } from 'shared/types/api';

export type TBook = {
  id: string | number;
  name: string;
  description: string;
  thumbnail_image: string;
  thumbnail_component?: string | null;
  language: string;
  authors: TBookPerson[];
  genre?: string | null;
  release_date: string;
  pages: number;
  published: boolean;
  reviews_avg_rating: number | null;
  reviews_count: number;
} & TArtists;

// TODO: move to a separate file
export type TRole = {
  role: string;
  notes?: string;
};

export type TBookPerson = {
  id: string | number;
  name: string;
  avatar?: string;
};

export type TArtist = TBookPerson & {
  project: TRole;
};

export type TArtists = {
  artists: TArtist[];
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
