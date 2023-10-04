import { PaymentItem } from '@/features/PaymentItem/PaymentItem';
import styles from './SubscriptionOptions.module.scss';

export const SubscriptionOptions = () => {
  return (
    <div className={styles.subscriptionOptions}>
      <PaymentItem name="1 month" monthPrice={2.99} monthCount={1} />
      <PaymentItem name="3 month" monthPrice={1.99} monthCount={3} isPopular />
      <PaymentItem name="6 month" monthPrice={2.49} monthCount={6} />
    </div>
  );
};
