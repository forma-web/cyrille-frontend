import PersonList from '@/containers/PersonList/PersonList';
import { TArtists } from '@/types/book';
import styles from './BookArtists.module.scss';

const BookArtists = ({ artists }: TArtists) => {
  if (!artists?.length) return null;

  return (
    <section className={styles.artists}>
      <h4>artists</h4>
      <PersonList persons={artists} />
    </section>
  );
};

export default BookArtists;
