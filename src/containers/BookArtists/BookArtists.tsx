import PersonList from '@/containers/PersonList/PersonList';
import { TArtists } from '@/types/book';
import CyrContainer from '@/components/ui/CyrContainer/CyrContainer';
import styles from './BookArtists.module.scss';

const BookArtists = ({ artists }: TArtists) => {
  if (!artists?.length) return null;

  return (
    <CyrContainer className={styles.artists}>
      <h4>artists</h4>
      <PersonList persons={artists} />
    </CyrContainer>
  );
};

export default BookArtists;
