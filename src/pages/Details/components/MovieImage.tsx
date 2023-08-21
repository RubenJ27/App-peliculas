import { imageUrlMovie } from '../../../helpers/imageUrl';
import type { ListMovieDetailsDataResponse } from '../../../models/moviesInterface';

// eslint-disable-next-line @typescript-eslint/naming-convention
const MovieImage = ({ poster_path }: ListMovieDetailsDataResponse): JSX.Element => {
  let imageMovie;
  if (poster_path !== null) {
    imageMovie = (
      <>
        {poster_path !== undefined && poster_path !== null ? (
          <img src={imageUrlMovie(poster_path)} className="w-80" alt="movie-details" />
        ) : (
          <img src={'/nodisponible.png'} className="w-80" alt="movie-details" />
        )}
      </>
    );
  }
  return <div className="w-1/3 flex justify-center">{imageMovie}</div>;
};

export default MovieImage;
