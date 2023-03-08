import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
/* import { useParams } from "react-router"; */
import movieTheater from "../assets/movie-theater.png";
/* import {BASE_URL_AUTOCOMPLETE} from "../api/ApiMovies"; */
import Loading from "../components/Loading";
import ResultList from "./components/ResultList";
import { getObtainMovies } from "../app/features/slices/moviesSlice";

export const Results = (movies) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    getTitleMovieSearch,
    isLoadingGetObtainMovies,
    getMoviesList,
  } = useSelector((state) => state.moviesSlice);
   /* api */
   /* const [getMovies, setGetMovies] = useState([]); */
   

   useEffect(() => {
 /*    obtainMovies(); */
 dispatch(getObtainMovies(getTitleMovieSearch));
  }, []);
  const handleListItemClick = (movieId) => {
    navigate(`/details/${movieId}`);
  }
  
  movies = getMoviesList;
   /* const obtainMovies = async () => {
    try {
      const response = await BASE_URL_AUTOCOMPLETE.get(`/?q=${title}`, { headers: { "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY, "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST} });
      setGetMovies(response.data.d);
    } catch (error) {
      console.log(error);
    }
   }; */


   /* if (!Object.entries(getMovies).length) {
    return(
    <div className="flex justify-center items-center mt-72">
      <Loading messageLoading="Buscando peliculas..." />
    </div>
    );
  }else {
      <div className="flex justify-center items-center mt-72">
        Hubo error por favor recargue la pagina
      </div>
  } */
  if (isLoadingGetObtainMovies) {
    return(
    <div className="flex justify-center items-center mt-72">
      <Loading messageLoading="Buscando peliculas..." />
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