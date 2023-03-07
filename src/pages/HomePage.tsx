import React from 'react';
import BooksList from '@/containers/BooksCollections/BooksList/BooksList';
import BooksCarousel from '@/containers/BooksCollections/BooksCarousel/BooksCarousel';
import { booksAccordion1, booksCarousel1, booksList1, booksList2 } from '@/mocks/books';
import BooksAccordion from '@/containers/BooksCollections/BooksAccordion/BooksAccordion';

const HomePage = () => {
  return (
    <div>
      <BooksList books={booksList1} />
      <BooksCarousel title="Новое" books={booksCarousel1} />
      <BooksList books={booksList2} />
      <BooksAccordion title="Soon" books={booksAccordion1} />
    </div>
  );
};

export default HomePage;
