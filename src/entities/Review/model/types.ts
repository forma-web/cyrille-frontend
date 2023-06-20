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

export type TReviewValues = {
  rating: string | null;
  comment: string | null;
};
