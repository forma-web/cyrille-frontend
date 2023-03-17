import { TArtist } from '@/types/book';

const getAuthors = (authors: TArtist[]) => {
  return authors.map((author) => author.name).join(', ');
};

export default getAuthors;
