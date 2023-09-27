import { PaymentItem } from '@/features/PaymentItem/PaymentItem';
import styles from './SubscriptionOptions.module.scss';

export const SubscriptionOptions = () => {
    return (
        <div className={styles.subscriptionOptions}>
            <PaymentItem />
            <PaymentItem />
            <PaymentItem />
        </div>
    );
};
