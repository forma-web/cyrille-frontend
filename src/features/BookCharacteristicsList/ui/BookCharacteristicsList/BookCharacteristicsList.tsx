import { CharacteristicsList } from 'entities/Characteristic';
import { TBook } from 'entities/Book';
import { BOOK_CHARACTERISTICS } from '../../consts/bookCharacteristics';
import { memo } from 'react';

export const BookCharacteristicsList = memo(({ book }: { book: TBook }) => {
  return (
    <CharacteristicsList<TBook>
      characteristics={BOOK_CHARACTERISTICS}
      origin={book}
    />
  );
});

BookCharacteristicsList.displayName = 'BookCharacteristicsList';
