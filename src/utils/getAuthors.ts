import { TBookPerson } from '@/types/book';

const getAuthors = (authors: TBookPerson[]) => {
  return authors.map((author) => author.name).join(', ');
};

export default getAuthors;
