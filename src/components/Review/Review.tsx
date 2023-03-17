import { TReview } from '@/types/review';
import format from 'date-fns/format';
import Profile from '../Profile/Profile';
import CyrRating from '../ui/CyrRating/CyrRating';

const Review = ({ rating, comment, created_at, user }: TReview) => {
  const { name, avatar } = user;

  return (
    <Profile
      name={name}
      avatar={avatar}
      caption={format(new Date(created_at), 'dd MMMM yyyy')}
      notes={comment}
      small
    >
      <CyrRating rating={rating} />
    </Profile>
  );
};

export default Review;
