import { Link } from 'react-router-dom';
import { CyrButton } from 'shared/ui';
import { AppRoutes } from 'shared/consts/routers';
import { TBook } from 'entities/Book';
import styles from './BookLinkToReader.module.scss';

export const BookLinkToReader = ({ id, published }: TBook) => {
  if (!published) return null;

  return (
    <section className={styles.link}>
      {/* TODO: make as function */}
      <Link to={`../${AppRoutes.reader}/${id}`}>
        <CyrButton>Read book</CyrButton>
      </Link>
    </section>
  );
};
