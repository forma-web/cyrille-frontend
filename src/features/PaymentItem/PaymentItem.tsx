import { memo } from 'react';
import styles from './PaymentItem.module.scss';
import cn from 'classnames';

type TPaymentItemProps = {
  name: string;
  monthPrice: number;
  monthCount: number;
  isPopular?: boolean;
  isActive?: boolean;
  onSubscriptionClick?: () => void;
};

export const PaymentItem = memo(function PaymentItem({
  name,
  monthCount,
  monthPrice,
  isPopular = false,
  isActive,
  onSubscriptionClick,
}: TPaymentItemProps) {
  const price = (monthPrice * monthCount).toFixed(2);
  const isVisibleMonthPrice = monthCount > 1;

  const classnames = cn(styles.button, isActive && styles.button_secondary);

  return (
    <article className={classnames} onClick={onSubscriptionClick}>
      <div className={styles.button__period}>
        <div className={styles.button__month}>{name}</div>
        {isPopular && (
          <div className={styles.button__monthPrice}>most popular</div>
        )}
      </div>
      <div className={styles.button__price}>
        US$ {price}
        {isVisibleMonthPrice && (
          <div className={styles.button__monthPrice}>
            US$ {monthPrice} per month
          </div>
        )}
      </div>
    </article>
  );
});
