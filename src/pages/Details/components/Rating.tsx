import ratingStart from '../../../assets/yellow-star.png';

import type { RatingInterface } from '../../../models/interfaces/MovieInterface';

const RatingContainer = ({ rating }: RatingInterface): JSX.Element => {
  return (
    <div className="flex flex-row my-1 items-center">
      <span className="text-xl font-bold w-full">{rating}</span>
      <img src={ratingStart} className="ml-1 w-6 h-6" alt="rating-start" />
    </div>
  );
};

export default RatingContainer;
