export type TReview = {
  id: number;
  rating: number;
  comment: string;
  created_at: string;
  user: {
    name: string;
    avatar: string | null;
  };
};
