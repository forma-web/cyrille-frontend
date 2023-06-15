import { CyrTrigger } from 'shared/ui';
import { TCyrTriggerProps } from '@/types/trigger';
import VideoTriggerIcon from './icons/VideoTriggerIcon';

const VideoTrigger = (props: TCyrTriggerProps) => {
  return (
    <CyrTrigger
      {...props}
      renderIcon={(isActive: boolean) => (
        <VideoTriggerIcon isActive={isActive} />
      )}
    />
  );
};

export default VideoTrigger;
