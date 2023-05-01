import ResultListItems from './ResultListItems';
import type { MoviesListData, ResultListData } from '../../../models/moviesInterface';

const ResultList = ({ data, onListItemClick }: ResultListData): JSX.Element => {
  return (
    <>
      {data?.map((movie: MoviesListData) => (
        <ResultListItems
          key={movie?.id}
          image={movie?.i}
          title={movie?.l}
          id={movie?.id}
          onListItemClick={onListItemClick}
        />
      ))}
    </>
  );
};

export default ResultList;
