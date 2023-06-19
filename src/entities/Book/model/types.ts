import { TResponse } from 'shared/types/api';
import { TBookPerson, TArtists } from 'entities/Artist';

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

export type TBookResponse = TResponse<TBook>;
