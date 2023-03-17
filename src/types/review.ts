export type TReview = {
  id: number;
  rating: number;
  comment?: string | null;
  created_at: string;
  user: {
    name: string;
    avatar: string | null;
  };
};
