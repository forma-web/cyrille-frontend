import { ConfirmSubscription } from '../ConfirmSubscription/ConfirmSuscription';
import { PromoInfo } from '../PromoInfo/PromoInfo';
import { SubscriptionOptions } from '../SubscriptionOptions/SubscriptionOptions';
import styles from './Subscription.module.scss';

export const Subscription = () => {
    return (
        <div className={styles.subscription}>
            <PromoInfo />
            <SubscriptionOptions />
            <ConfirmSubscription />
        </div>
    );
};