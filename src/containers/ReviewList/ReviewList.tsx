import { TReview } from '@/types/review';
import { Review } from '@/components/Review';
import styles from './ReviewList.module.scss';
import { InfiniteData } from '@tanstack/react-query';
import { TPagination } from 'shared/types/api';
import React from 'react';

type TArtistsListProps = {
  reviews: InfiniteData<TPagination<TReview>>;
};

const ReviewList = ({ reviews }: TArtistsListProps) => {
  return (
    <ul className={styles.reviews}>
      {reviews.pages.map(({ data }, index) => (
        <React.Fragment key={index}>
          {data.map((reviewData) => (
            <li className={styles.reviews__item} key={reviewData.id}>
              <Review {...reviewData} />
            </li>
          ))}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default ReviewList;
