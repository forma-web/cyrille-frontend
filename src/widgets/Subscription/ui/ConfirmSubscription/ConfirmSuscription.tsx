import { CyrButton } from '@/shared/ui';
import styles from './ConfirmSubscription.module.scss';

export const ConfirmSubscription = () => {
    return (
        <div className={styles.footer}>
            <CyrButton type="submit">Continue with 3 months</CyrButton>
            <p className={styles.description}>
                Subscriptions will automatically renew your card will be charged at the
                the end of each period.
            </p>
        </div>
    )
}