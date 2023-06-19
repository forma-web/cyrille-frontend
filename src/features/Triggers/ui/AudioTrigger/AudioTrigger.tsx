import { CyrTrigger } from 'shared/ui';
import { TTriggerProps } from 'shared/types/trigger';
import { AudioTriggerIcon } from '../../assets/icons';

export const AudioTrigger = (props: TTriggerProps) => {
  return (
    <CyrTrigger
      {...props}
      renderIcon={(isActive: boolean) => (
        <AudioTriggerIcon isActive={isActive} />
      )}
    />
  );
};
