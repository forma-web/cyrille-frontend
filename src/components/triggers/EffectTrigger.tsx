import { CyrTrigger } from 'shared/ui';
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
