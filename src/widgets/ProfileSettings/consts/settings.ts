import { TSettingsConfig } from '../model/types';
import {
  getRouteProfileChangeEmail,
  getRouteProfileChangeName,
  getRouteProfileChangePassword,
} from '@/shared/consts/routers';

export const SETTINGS_CONFIG: TSettingsConfig = [
  {
    title: 'Change name',
    redirectTo: getRouteProfileChangeName(),
  },
  {
    title: 'Change email',
    redirectTo: getRouteProfileChangeEmail(),
  },
  {
    title: 'Change password',
    redirectTo: getRouteProfileChangePassword(),
  },
];
