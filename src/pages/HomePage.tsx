import React from 'react';
import BooksList from '@/containers/BooksList/BooksList';
import BooksCarousel from '@/containers/BooksCarousel/BooksCarousel';
import { booksCarousel1, booksList1, booksList2 } from '@/mocks/books';

const HomePage = () => {
  return (
    <div>
      <BooksList books={booksList1} />
      <BooksCarousel title="Новое" books={booksCarousel1} />
      <BooksList books={booksList2} />
    </div>
  );
};

export default HomePage;
