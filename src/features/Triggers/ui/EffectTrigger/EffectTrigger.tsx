import { CyrTrigger } from 'shared/ui';
import { TTriggerProps } from 'shared/types/trigger';
import { EffectTriggerIcon } from '../../assets/icons';

export const EffectTrigger = (props: TTriggerProps) => {
  return (
    <CyrTrigger
      {...props}
      renderIcon={(isActive: boolean) => (
        <EffectTriggerIcon isActive={isActive} />
      )}
    />
  );
};
