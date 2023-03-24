import CyrTrigger from '@/components/ui/CyrTrigger/CyrTrigger';
import { TCyrTriggerProps } from '@/types/trigger';
import PhotoTriggerIcon from './icons/PhotoTriggerIcon';

const PhotoTrigger = (props: TCyrTriggerProps) => {
  return (
    <CyrTrigger
      {...props}
      renderIcon={(isActive: boolean) => (
        <PhotoTriggerIcon isActive={isActive} />
      )}
    />
  );
};

export default PhotoTrigger;
