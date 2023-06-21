import { CyrTrigger } from 'shared/ui';
import { TTriggerProps } from 'shared/types/trigger';
import { VideoTriggerIcon } from '../../assets/icons';

export const VideoTrigger = (props: TTriggerProps) => {
  return (
    <CyrTrigger
      {...props}
      renderIcon={(isActive: boolean) => (
        <VideoTriggerIcon isActive={isActive} />
      )}
    />
  );
};
