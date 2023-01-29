import React from 'react'
import ResultListItems from "./ResultListItems";


const ResultList = ({ data }) => {
   /* console.log(data) */
  return data?.map(movie => <ResultListItems key={movie.id} imageURL={movie.i.imageUrl} title={movie.l}  /> )
};

export default ResultList