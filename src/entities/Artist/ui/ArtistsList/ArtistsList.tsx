import { Profile } from 'entities/Profile';
import { TArtist } from 'entities/Artist';
import styles from './ArtistsList.module.scss';

type TArtistsListProps = {
  persons: TArtist[];
};

export const ArtistsList = ({ persons }: TArtistsListProps) => {
  if (!persons?.length) return null;

  return (
    <ul className={styles.persons}>
      {persons.map(({ id, name, avatar, project }) => (
        <li className={styles.persons__item} key={id}>
          <Profile
            name={name}
            caption={`(${project?.role})`}
            notes={project?.notes}
            avatar={avatar}
          />
        </li>
      ))}
    </ul>
  );
};
