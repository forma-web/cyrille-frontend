import CyrTrigger from '@/components/ui/CyrTrigger/CyrTrigger';
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
