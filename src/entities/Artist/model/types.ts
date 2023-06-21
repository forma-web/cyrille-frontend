export type TBookPerson = {
  id: string | number;
  name: string;
  avatar?: string;
};

export type TArtist = TBookPerson & {
  project: TRole;
};

export type TRole = {
  role: string;
  notes?: string;
};

export type TArtists = {
  artists: TArtist[];
};
