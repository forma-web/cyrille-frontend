import { Link } from 'react-router-dom';
import { CyrButton } from 'shared/ui';
import { ERoutes } from '@/constants/routers';
import { TBook } from '@/types/book';
import styles from './BookLink.module.scss';

const BookLink = ({ id, published }: TBook) => {
  if (!published) return null;

  return (
    <section className={styles.link}>
      <Link to={`../${ERoutes.reader}/${id}`}>
        <CyrButton>Read book</CyrButton>
      </Link>
    </section>
  );
};

export default BookLink;
