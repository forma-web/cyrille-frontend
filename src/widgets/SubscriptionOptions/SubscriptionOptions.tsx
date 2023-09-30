import { PaymentItem } from '@/features/PaymentItem/PaymentItem';
import styles from './SubscriptionOptions.module.scss';

export const SubscriptionOptions = () => {
  return (
    <div className={styles.subscriptionOptions}>
      <PaymentItem month="1 MONTH" price="US$ 2,99" popular={false} />
      <PaymentItem
        month="3 MONTH"
        price="US$ 5,99 US$"
        monthPrice="1,99 per month"
        popular={true}
      />
      <PaymentItem
        month="6 MONTH"
        price="US$ 29,99 US$"
        monthPrice="2,49  per month"
        popular={false}
      />
    </div>
  );
};
