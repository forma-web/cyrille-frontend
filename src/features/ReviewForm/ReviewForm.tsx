import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { CyrButton, CyrTextarea, CyrRatingInput } from 'shared/ui';
import { useForm } from 'react-hook-form';
import { TReviewValues } from '@/types/review';
import styles from './ReviewForm.module.scss';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createReviewBookFetch } from '@/services/books';

export const ReviewForm = ({ bookId }: { bookId: string | number }) => {
  const { register, watch, reset, handleSubmit } = useForm<TReviewValues>({
    mode: 'onChange',
  });

  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: TReviewValues) => createReviewBookFetch(bookId, data),
    onSuccess: () => {
      reset();
      client.invalidateQueries({
        queryKey: ['reviews', String(bookId)],
      });
    },
  });

  const onSubmit = (data: TReviewValues) => {
    mutate(data);
  };

  const ratingValue = watch('rating', null);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.ratingForm}>
      <CyrRatingInput currentValue={ratingValue} {...register('rating')} />
      {ratingValue && (
        <>
          <CyrTextarea
            placeholder="Leave a feedback about this book"
            maxLength={120}
            {...register('comment')}
          />
          <CyrButton type="submit">
            Rate
            <PaperAirplaneIcon />
          </CyrButton>
        </>
      )}
    </form>
  );
};
