import { ResultListDiscoverData, Results } from '../../types';
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
