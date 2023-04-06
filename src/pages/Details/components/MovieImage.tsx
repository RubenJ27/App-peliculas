import type { Image } from '../../../models/moviesInterface';

const MovieImage = ({ image }: { image: Image }): JSX.Element => {
  return (
    <div className="w-1/3 flex justify-center">
      <img
        src={image.url ?? '/nodisponible.png'}
        className="w-80"
        alt="movie-details"
      />
    </div>
  );
};

export default MovieImage;
