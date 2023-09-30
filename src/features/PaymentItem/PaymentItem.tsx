import styles from './PaymentItem.module.scss';
import cn from 'classnames';

type TButtonProps = React.ButtonHTMLAttributes<HTMLElement> & {
  month?: string;
  price?: string;
  monthPrice?: string;
  popular?: boolean;
};

export const PaymentItem = ({
  month,
  price,
  monthPrice,
  popular,
}: TButtonProps) => {
  const classnames = cn(styles.button, popular && styles.button_secondary);
  return (
    <button className={classnames}>
      <div className={styles.button__period}>
        <div className={styles.button__month}>{month}</div>
        <div className={styles.button__monthPrice}>
          {popular ? 'most popular' : ''}
        </div>
      </div>
      <div className={styles.button__price}>
        {price}
        <div className={styles.button__monthPrice}>{monthPrice}</div>
      </div>
    </button>
  );
};
