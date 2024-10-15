import type { ResultMovieDetailsData } from '../../../models/interfaces/MovieInterface';
import MovieImage from './MovieImage';

export const LeftContainer = ({ data }: ResultMovieDetailsData): JSX.Element => {
  return <MovieImage poster_path={data?.poster_path ?? ''} />;
};
