import { TReview } from '@/types/review';
import Profile from '../Profile/Profile';
import CyrRating from '../ui/CyrRating/CyrRating';

const Review = ({ rating, comment, date, user }: TReview) => {
  const { name, avatar } = user;

  return (
    <Profile name={name} avatar={avatar} caption={date} notes={comment} small>
      <CyrRating rating={rating} />
    </Profile>
  );
};

export default Review;
