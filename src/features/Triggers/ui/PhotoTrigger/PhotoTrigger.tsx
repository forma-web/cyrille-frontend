import { CyrTrigger } from 'shared/ui';
import { TTriggerProps } from 'shared/types/trigger';
import { PhotoTriggerIcon } from '../../assets/icons';

export const PhotoTrigger = (props: TTriggerProps) => {
  return (
    <CyrTrigger
      {...props}
      renderIcon={(isActive: boolean) => (
        <PhotoTriggerIcon isActive={isActive} />
      )}
    />
  );
};
