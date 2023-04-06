import MovieImage from './MovieImage';
import type { Title } from '../../../models/moviesInterface';

interface Props {
  title?: Title;
}

export const LeftContainer = ({ title }: Props): JSX.Element => {
  return <MovieImage image={title?.image ?? {}} />;
};
