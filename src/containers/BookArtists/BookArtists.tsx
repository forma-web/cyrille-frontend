import PersonList from '@/containers/PersonList/PersonList';
import { TArtists } from '@/types/book';
import CyrContainer from '@/components/ui/CyrContainer/CyrContainer';
import styles from './BookArtists.module.scss';
import CyrDivide from '@/components/ui/CyrDivide/CyrDivide';

const BookArtists = ({ artists }: TArtists) => {
  if (!artists?.length) return null;

  return (
    <CyrContainer className={styles.artists} gap={4.8}>
      <h4>artists</h4>
      <CyrDivide total={2} />
      <PersonList persons={artists} />
    </CyrContainer>
  );
};

export default BookArtists;
