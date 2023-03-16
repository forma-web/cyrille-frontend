import React from 'react';
import PersonList from '@/containers/PersonList/PersonList';
import styles from './BookArtists.module.scss';

const BookArtists = () => {
  return (
    <section className={styles.artists}>
      <h4>artists</h4>
      <PersonList />
    </section>
  );
};

export default BookArtists;
