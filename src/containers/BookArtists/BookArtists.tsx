import PersonList from '@/containers/PersonList/PersonList';
import { TArtists } from '@/types/book';
import { CyrContainer } from 'shared/ui';
import styles from './BookArtists.module.scss';
import CyrDivide from '@/components/ui/CyrDivide/CyrDivide';

const BookArtists = ({ artists }: TArtists) => {
  if (!artists?.length) return null;

  return (
    <CyrContainer className={styles.artists} gap={3.2}>
      <h4>artists</h4>
      <article className={styles.artists__description}>
        Meet the{' '}
        <span className={styles.artists__description_contrast}>artists</span>{' '}
        who have worked to help create a unique, interactive experience for you
        <div className={styles.artists__signature}>Creative side</div>
      </article>
      <CyrDivide total={2} />
      <PersonList persons={artists} />
    </CyrContainer>
  );
};

export default BookArtists;
