import { CyrButton } from '@/shared/ui';
import { SubscriptionOptions } from '@/widgets/SubscriptionOptions/SubscriptionOptions';
import styles from './PaymentPage.module.scss';

const PaymentPage = () => {
  return (
    <div className={styles.paymentPage}>
      <div>
        <h1>Subscribe and enjoy</h1>
        <p className={styles.paymentPage__tagline}>
          <i>- “Behind the pages”</i> - exclusive glimpse into the creative
          process of crafting our books
          <br />
          <i>- “Be first”</i> - personal newsletter about upcoming releases
          <br />
          <i>- Unlimited access to all books</i> each featuring unique content
          <br />
          <i>- Cancel anytime</i>
        </p>
      </div>

      <SubscriptionOptions />
      <div className={styles.paymentPage__footer}>
        <CyrButton type="submit">Continue with 3 months</CyrButton>
        <p className={styles.description}>
          Subscriptions will automatically renew your card will be charged at
          the end of each period.
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;
