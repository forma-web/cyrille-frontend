import { Profile } from 'entities/Profile';
import { TArtist } from '@/types/book';
import styles from './PersonList.module.scss';

type TPersonListProps = {
  persons: TArtist[];
};

const PersonList = ({ persons }: TPersonListProps) => {
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

export default PersonList;
