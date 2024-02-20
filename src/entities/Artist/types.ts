export type Artist = {
  id: string | number;
  name: string;
  avatar?: string;
  full_bio?: string;
  short_bio?: string;
};

export type ArtistRole = {
  role: string;
  notes?: string;
};

export type ArtistProject = Artist & {
  project: ArtistRole;
};
