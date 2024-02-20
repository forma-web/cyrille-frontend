import type { NavigationMenuItem } from '@shared/ui/NavigationMenu';

export const MENU_ITEMS: NavigationMenuItem[] = [
  {
    name: 'Library',
    location: '/library',
  },
  {
    name: 'My Books',
    location: '/profile/books',
  },
  {
    name: 'About',
    location: '/about',
  },
  {
    name: 'Subscription',
    location: '/subscription',
  },
];

export const PROFILE_ITEMS: NavigationMenuItem[] = [
  {
    name: 'My Books',
    location: '/profile/books',
  },
  {
    name: 'Favorites',
    location: '/profile/favorites',
  },
  {
    name: 'Quotes',
    location: '/profile/quotes',
  },
  {
    name: 'Subscription',
    location: '/profile/subscription',
  },
];
