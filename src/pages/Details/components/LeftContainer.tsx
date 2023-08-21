import type { ResultMovieDetailsData } from '../../../models/moviesInterface';
import MovieImage from './MovieImage';

export const LeftContainer = ({ data }: ResultMovieDetailsData): JSX.Element => {
  return <MovieImage poster_path={data?.poster_path ?? ''} />;
};
