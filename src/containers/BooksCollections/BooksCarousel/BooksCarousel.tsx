import { TBookCarousel } from '@/types/book';
import '@/assets/styles/carousel.scss';
import styles from './BooksCarousel.module.scss';
import BookCarouselItem from './components/BookCarouselItem/BookCarouselItem';
import cn from 'classnames';

const BookCarousel = ({ title, books }: TBookCarousel) => {
  if (!books.length) return null;

  return (
    <div className={cn(styles.carousel, 'carousel')}>
      {title && <h3 className={styles.carousel__title}>{title}</h3>}
      <ul className={cn(styles.carousel__list, 'carousel__list')}>
        {books.map((book) => (
          <li key={book.id} className={styles.carousel__item}>
            <BookCarouselItem {...book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookCarousel;
