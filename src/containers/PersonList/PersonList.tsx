import React from 'react';
import Profile from '@/components/Profile/Profile';
import styles from './PersonList.module.scss';

const PersonList = () => {
  return (
    <ul className={styles.persons}>
      <li className={styles.persons__item}>
        <Profile
          name="Alina Korshunkova"
          caption="illustration"
          notes="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies id
          integer leo orci, dictum dignissim dignissim justo Nam dictum cras
          enim, cras morbi proin purus. Donec quam nisl a id. Non mauris
          pharetra, quisque dictum integer porttitor magna"
        />
      </li>
      <li className={styles.persons__item}>
        <Profile
          name="Robert Fox"
          caption="music"
          notes="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies id
          integer leo orci, dictum dignissim dignissim justo Nam dictum cras
          enim, cras morbi proin purus. Donec quam nisl a id. Non mauris
          pharetra, quisque dictum integer porttitor magna"
        />
      </li>
    </ul>
  );
};

export default PersonList;
