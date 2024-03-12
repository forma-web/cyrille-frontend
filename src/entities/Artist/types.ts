export interface Artist {
  id: string | number;
  name: string;
  avatar?: string;
  full_bio?: string;
  short_bio?: string;
}

export interface ArtistRole {
  role: string;
  notes?: string;
}

export type ArtistProject = Artist & {
  project: ArtistRole;
};
