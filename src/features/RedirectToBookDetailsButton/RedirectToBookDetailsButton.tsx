import styles from './RedirectToBookDetailsButton.module.scss';
import { Link, useParams } from 'react-router-dom';
import { CyrButton } from 'shared/ui';
import { AppRoutes } from 'shared/consts/routers';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

export const RedirectToBookDetailsButton = () => {
  const { bookId } = useParams();

  return (
    <Link to={`../${AppRoutes.books}/${bookId}`}>
      <CyrButton className={styles.back}>
        <ChevronLeftIcon />
        back
      </CyrButton>
    </Link>
  );
};
