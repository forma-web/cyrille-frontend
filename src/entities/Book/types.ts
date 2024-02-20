import type { Artist } from '../Artist/types';

export type Book = {
  id: number;
  name: string;
  description: string;
  thumbnail_image: string;
  thumbnail_component?: string;
  language: string;
  authors: Artist[];
  genre?: string;
  release_date: string;
  pages: number;
  published: boolean;
};

export type BookDetails = Book & {
  reviews_avg_rating: number;
  reviews_count: number;
  artists: Artist[];
};
