import React, { useState ,useEffect } from 'react'

import { useNavigate } from "react-router";
import { useParams } from "react-router";
import movieTheater from "../assets/movie-theater.png";
import {BASE_URL} from "../api/ApiMovies";
import Loading from "./components/Loading";
import ResultList from "./components/ResultList";

export const Results = (movies) => {
  const { title } = useParams();
  const navigate = useNavigate();
   /* api */
   const [getMovies, setGetMovies] = useState([]);
   useEffect(() => {
    obtainMovies();
  }, []);

  const handleListItemClick = (movieId) => {
    navigate(`/details/${movieId}`);
  }
  
  
  movies = getMovies;

   const obtainMovies = async () => {
    try {
      const response = await BASE_URL.get(`/?q=${title}`, { headers: { "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY, "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"} });
      setGetMovies(response.data.d);
    } catch (error) {
      console.log(error);
    }
   };

   /* axios.get(`https://online-movie-database.p.rapidapi.com/auto-complete/?q=${title}`, { headers: { "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY, "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"} })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err)) */
/* 
   console.log(getMovies.d) */
 
    /* console.log(!Object.entries(getMovies).length); */

   if (!Object.entries(getMovies).length) {
    return(
    <div className="flex justify-center items-center mt-72">
      <Loading />
    </div>
    );
  }else {
      <div className="flex justify-center items-center mt-72">
        Hubo error por favor recargue la pagina
      </div>
  }

  return (
    <>
      <div className="flex flex-row h-screen overflow-hidden">
        <div className="w-3/5 h-screen justify-center items-center px-10 overflow-y-auto">
         <ResultList data={movies} onListItemClick={handleListItemClick} />
        </div>
        <div className="w-2/5">
          <img
            src={movieTheater}
            alt="Movie Theater"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}