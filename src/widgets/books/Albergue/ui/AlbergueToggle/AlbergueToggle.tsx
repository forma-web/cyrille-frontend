import styles from './AlbergueToggle.module.scss';
import cn from 'classnames';

type TAlbergueToggleProps = React.HTMLAttributes<HTMLButtonElement> & {
  isActive: boolean;
  onClick: () => void;
};

export const AlbergueToggle = ({
  isActive,
  onClick,
  className,
}: TAlbergueToggleProps) => {
  const classNames = cn(
    styles.toggle,
    isActive && styles.toggle_active,
    className,
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button type="button" className={classNames} onClick={handleClick}>
      <div className={styles.toggle__circle}>
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          {isActive ? (
            <path d="M15,30A15,15,0,1,0,0,15,15,15,0,0,0,15,30ZM12.3694,7.2a9.01,9.01,0,0,0-.6461,3.5539,8.7226,8.7226,0,0,0,8.7228,8.7228A9.013,9.013,0,0,0,24,18.8306,8.79,8.79,0,1,1,12.3694,7.2Z" />
          ) : (
            <path
              fillRule="evenodd"
              d="M15,30A15,15,0,1,0,0,15,15,15,0,0,0,15,30Zm.5753-24.7941a.7032.7032,0,0,0-1.2.4972v.9375a.7031.7031,0,1,0,1.4062,0V5.7031A.7036.7036,0,0,0,15.5753,5.2059Zm-4.3089,6.0605a5.3906,5.3906,0,1,1-1.5789,3.8117A5.3909,5.3909,0,0,1,11.2664,11.2664ZM8.4524,7.7546a.703.703,0,0,1,.4945.1976l.6619.6628a.7032.7032,0,1,1-.9938.9938l-.6628-.6629a.7031.7031,0,0,1,.5-1.1913ZM24.95,15.5753a.7032.7032,0,0,0-.4971-1.2h-.9375a.7031.7031,0,0,0,0,1.4062h.9375A.7028.7028,0,0,0,24.95,15.5753ZM22.3618,8.7187a.7042.7042,0,0,1-.1577.2282l-.6629.6619a.7031.7031,0,1,1-.9937-.9938l.6629-.6628a.7031.7031,0,0,1,1.1514.7665Zm-6.7865,14.3a.7032.7032,0,0,0-1.2.4971v.9375a.7031.7031,0,0,0,1.4062,0v-.9375A.703.703,0,0,0,15.5753,23.0185Zm5.7377-2.6339a.7009.7009,0,0,1,.2282.1629l.6629.6629a.7031.7031,0,1,1-.9937.9937l-.6629-.6629a.7031.7031,0,0,1,.7655-1.1566ZM7.1378,15.5753a.7032.7032,0,0,0-.4972-1.2H5.7031a.7031.7031,0,1,0,0,1.4062h.9375A.7032.7032,0,0,0,7.1378,15.5753Zm2.66,5.4742a.703.703,0,0,1-.1886.4917l-.6628.6629a.7031.7031,0,0,1-.9938-.9937l.6628-.6629a.7032.7032,0,0,1,1.1824.502Z"
            />
          )}
        </svg>
      </div>
    </button>
  );
};
