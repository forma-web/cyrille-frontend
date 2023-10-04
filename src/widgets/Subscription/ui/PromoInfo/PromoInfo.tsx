import styles from './PromoInfo.module.scss';

export const PromoInfo = () => {
    return (
        <div className={styles.promoInfo}>
            <h1 className={styles.promoInfo__title}>Subscribe and enjoy</h1>
            <ul className={styles.promoInfo__tagline}>
                <li>
                    <span className={styles.promoInfo_accentText}>- “Behind the pages”</span> -
                    exclusive glimpse into the creative process of crafting our books
                </li>
                <li>
                    <span className={styles.promoInfo_accentText}>- “Be first”</span> - personal
                    newsletter about upcoming releases
                </li>
                <li>
                    <span className={styles.promoInfo_accentText}>
                        - Unlimited access to all books
                    </span> each featuring unique content
                </li>
                <li>
                    <span className={styles.promoInfo_accentText}>- Cancel anytime</span>
                </li>
            </ul>
        </div>
    )
}