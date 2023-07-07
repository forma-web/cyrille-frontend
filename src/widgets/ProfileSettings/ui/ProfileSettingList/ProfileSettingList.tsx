import { ProfileSettingItem } from '@/features/ProfileSettingItem';
import { SETTINGS_CONFIG } from '../../consts/settings';

export const ProfileSettingsList = () => {
  return (
    <ul>
      {SETTINGS_CONFIG.map((settingProps, index) => (
        <li key={index}>
          <ProfileSettingItem {...settingProps} />
        </li>
      ))}
    </ul>
  );
};
