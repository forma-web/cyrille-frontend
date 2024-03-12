import type { RouteLocationRaw } from '#vue-router';

export interface NavigationMenuItem {
  name: string;
  location: RouteLocationRaw;
}
