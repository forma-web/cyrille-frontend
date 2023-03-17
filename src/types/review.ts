export type TReview = {
  id: number;
  rating: number;
  comment: string;
  date: string;
  user: {
    name: string;
    avatar: string | null;
  };
};
