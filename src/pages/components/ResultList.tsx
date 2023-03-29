import { ResultListData } from "../../models/movies";
import ResultListItems from "./ResultListItems";

const ResultList = ({ data, onListItemClick }: ResultListData) => {
  return (
    <>
      {data?.map((movie) =>
        <ResultListItems
          key={movie?.id}
          image={movie?.i}
          title={movie?.l}
          id={movie?.id}
          onListItemClick={onListItemClick} />
      )
      }
    </>
  )
};

export default ResultList