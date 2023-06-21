import { TBookPerson } from '../model/types';

export const getArtistNames = (artists: TBookPerson[]) => {
  return artists.map((artists) => artists.name).join(', ');
};
