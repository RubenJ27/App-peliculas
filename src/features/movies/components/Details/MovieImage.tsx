import { imageUrlMovie } from '../../../../core/helpers/imageUrl';
import { ListMovieDetailsDataResponse } from '../../types';

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
