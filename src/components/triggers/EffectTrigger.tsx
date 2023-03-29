import CyrTrigger from '@/components/ui/CyrTrigger/CyrTrigger';
import EffectTriggerIcon from './icons/EffectTriggerIcon';
import { TCyrTriggerProps } from '@/types/trigger';

const EffectTrigger = (props: TCyrTriggerProps) => {
  return (
    <CyrTrigger
      {...props}
      renderIcon={(isActive: boolean) => (
        <EffectTriggerIcon isActive={isActive} />
      )}
    />
  );
};

export default EffectTrigger;
