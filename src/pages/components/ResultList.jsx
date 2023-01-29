import React, {useState, useEffect} from 'react'


const ResultList = (getMovies) => {
  const [resultMovies, setResultMovies] = useState([]);

  useEffect(() => {
    setResultMovies([getMovies]);
   }, []);
   console.log(resultMovies)
  return (
    <div>
       {resultMovies.map((item, index) => (
        console.log(item.data.Title),
        console.log(item.data.imdbID),
        console.log(index),
          <div key={item.data.imdbID}>
            <div>
              <img src={item.data.Poster} alt={item.data.Title} />
            </div>
            <div>
            <p className="font-bold text-xl mb-2">{item.data.Title}</p>
            <div><button className="">Ver mas</button></div>

            </div>

          </div>
        ))}
    </div>
  )
  /* return getMovies.map(data => (
    <div key={getMovies.id}>

    </div>
  )); */
};

export default ResultList