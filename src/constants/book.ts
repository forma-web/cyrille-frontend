import { TBook } from '@/types/book';
import { format, getYear } from 'date-fns';

type TStatisticBook = {
  title: string;
  value: string | ((book: TBook) => string | number);
  caption: string | ((book: TBook) => string | number);
};

export const STATISTICS_BOOK: TStatisticBook[] = [
  {
    title: 'Released',
    value: ({ release_date }: TBook) => getYear(new Date(release_date)),
    caption: ({ release_date }: TBook) =>
      format(new Date(release_date), 'dd MMMM'),
  },
  {
    title: 'Length',
    value: ({ pages }: TBook) => pages,
    caption: ({ pages }: TBook) => `paper ${pages > 1 ? 'pages' : 'page'}`,
  },
  {
    title: 'Language',
    value: 'Eng',
    caption: 'English',
  },
];
