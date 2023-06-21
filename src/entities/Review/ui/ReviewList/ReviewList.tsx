import { TReview } from '../../model/types';
import { Review } from '../Review/Review';
import styles from './ReviewList.module.scss';
import { InfiniteData } from '@tanstack/react-query';
import { TPagination } from 'shared/types/api';
import React from 'react';

type TReviewListProps = {
  reviews: InfiniteData<TPagination<TReview>>;
};

export const ReviewList = ({ reviews }: TReviewListProps) => {
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
