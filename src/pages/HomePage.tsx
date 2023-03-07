import React from 'react';
import BooksList from '@/containers/BooksList/BooksList';
import { TBookItem } from '@/types/book';
import BookCarousel from '@/containers/BookCarousel/BookCarousel';

const books1: TBookItem[] = [
  {
    title: 'The Albergue',
    authors: ["Cyrille D'Essaí"],
    description: 'Sci-fi chronicles of mankind ultimate crisis and last hope',
    coverURL:
      'https://img3.labirint.ru/rc/fb38ddbf3d849e56a54b6f001c99f25e/363x561q80/books69/688139/cover.jpg?1564199262',
  },
  {
    title: 'The House of Gucci',
    authors: ['Sara Gay Forden'],
    description: 'A Sensational Story of Murder, Madness, Glamour, and Greed.',
    coverURL:
      'https://img3.labirint.ru/rc/fb38ddbf3d849e56a54b6f001c99f25e/363x561q80/books69/688139/cover.jpg?1564199262',
  },
  {
    title: 'Billy Summers',
    authors: ['Stephen King'],
    description:
      'Billy Summers is a hitman contemplating retirement when he is approached by a familiar mobster',
    coverURL:
      'https://img3.labirint.ru/rc/fb38ddbf3d849e56a54b6f001c99f25e/363x561q80/books69/688139/cover.jpg?1564199262',
  },
  {
    title: 'The Life-Changing Magic of Not Giving a F**k',
    authors: ['Sarah Knight'],
    description:
      'The "genius" national bestseller on the art of caring less and getting more ',
    coverURL:
      'https://img3.labirint.ru/rc/fb38ddbf3d849e56a54b6f001c99f25e/363x561q80/books69/688139/cover.jpg?1564199262',
  },
];

const HomePage = () => {
  return (
    <div>
      <BookCarousel books={books1} />
    </div>
  );
};

export default HomePage;
