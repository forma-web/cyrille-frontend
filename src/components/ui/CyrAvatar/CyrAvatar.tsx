import styles from './CyrAvatar.module.scss';

type TCyrAvatarProps = {
  image?: string;
  width?: number;
  name: string;
};

const CyrAvatar = ({ image, width, name }: TCyrAvatarProps) => {
  return (
    <div className={styles.avatar} style={{ fontSize: width }}>
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

export default CyrAvatar;
