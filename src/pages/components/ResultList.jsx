import React from 'react'
import ResultListItems from "./ResultListItems";


const ResultList = ({ data, onListItemClick }) => {
  return data?.map(movie => <ResultListItems key={movie.id} imageURL={movie.i.imageUrl} title={movie.l} id={movie.id} onListItemClick={onListItemClick} /> )
};

export default ResultList