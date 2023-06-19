import { TBook } from 'entities/Book';
import { format, getYear } from 'date-fns';
import { TCharacteristic } from '../../../entities/Characteristic/model/types';

export const BOOK_CHARACTERISTICS: TCharacteristic<TBook>[] = [
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
