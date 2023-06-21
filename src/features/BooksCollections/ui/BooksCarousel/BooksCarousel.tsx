import { TBookCarousel } from '../../model/types';
import commonStyles from '../../styles/Carousel.module.scss';
import styles from './BooksCarousel.module.scss';
import { BookCarouselItem } from '../BookCarouselItem/BookCarouselItem';
import cn from 'classnames';

export const BooksCarousel = ({ title, books }: TBookCarousel) => {
  if (!books.length) return null;

  return (
    <div className={cn(styles.carousel, commonStyles.carousel)}>
      {title && <h3 className={styles.carousel__title}>{title}</h3>}
      <ul className={cn(styles.carousel__list, commonStyles.carousel__list)}>
        {books.map((book) => (
          <li key={book.id} className={styles.carousel__item}>
            <BookCarouselItem {...book} />
          </li>
        ))}
      </ul>
    </div>
  );
};
