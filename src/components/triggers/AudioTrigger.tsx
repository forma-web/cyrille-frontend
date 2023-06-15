import { CyrTrigger } from 'shared/ui';
import { TCyrTriggerProps } from '@/types/trigger';
import AudioTriggerIcon from './icons/AudioTriggerIcon';

const AudioTrigger = (props: TCyrTriggerProps) => {
  return (
    <CyrTrigger
      {...props}
      renderIcon={(isActive: boolean) => (
        <AudioTriggerIcon isActive={isActive} />
      )}
    />
  );
};

export default AudioTrigger;
