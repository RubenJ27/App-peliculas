import type { ResultListDiscoverData, Results } from '../../../models/moviesInterface';
import ResultListItems from './ResultListItems';

const ResultList = ({ moviesDiscoverCurrentList, onListItemClick }: ResultListDiscoverData): JSX.Element => {
  return (
    <>
      {moviesDiscoverCurrentList?.map((result: Results) => (
        <ResultListItems
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

export default ResultList;
