import type { ResultSearchesMoviesData, Results } from '../../../models/interfaces/MovieInterface';
import ResultListSearchItems from './ResultListSearchItems';

const ResultListSearch = ({ moviesSearchesCurrentList, onListItemClick }: ResultSearchesMoviesData): JSX.Element => {
  return (
    <>
      {moviesSearchesCurrentList?.map((result: Results) => (
        <ResultListSearchItems
          key={result?.id}
          poster_path={result?.poster_path}
          title={result?.title}
          id={result?.id}
          onListItemClick={onListItemClick}
        />
      ))}
    </>
  );
};

export default ResultListSearch;
