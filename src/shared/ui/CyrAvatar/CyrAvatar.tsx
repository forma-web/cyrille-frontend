import styles from './CyrAvatar.module.scss';
import cn from 'classnames';

type TCyrAvatarProps = {
  image?: string | null;
  width?: number;
  name: string;
  dark?: boolean;
};

export const CyrAvatar = ({
  image,
  width,
  name,
  dark = false,
}: TCyrAvatarProps) => {
  return (
    <div
      className={cn(styles.avatar, dark && styles.avatar_dark)}
      style={{ fontSize: `${width}rem` }}
    >
      {image ? (
        <img src={image} />
      ) : (
        <div className={styles.avatar__text}>
          {name.trim()[0].toUpperCase()}
        </div>
      )}
    </div>
  );
};
