import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import movieTheater from "../assets/movie-theater.png";
import Loading from "./components/Loading";
import ResultList from "./components/ResultList.jsx";
import { getOnlineMovieDataBaseAutoComplete } from "../app/store/actions/online-movie-database/online-movie-database.actions";
import { StateStorage } from "../models/StateStorage";
import { AppDispatch } from "../app/store/store";
import { MoviesState } from "../models/movies";

export const Results = ({ movies }: MoviesState) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { title } = useParams(); /* El useParams gancho devuelve un objeto de pares clave/valor de los parámetros dinámicos de la URL actual que coincidieron con el <Route path>. Las rutas secundarias heredan todos los parámetros de sus rutas principales*/
  /* api */
  /* const [getMovies, setGetMovies] = useState([]); */
  /* const [getTitleMovie, setGetTitleMovie] = useState(""); */
  /* setGetTitleMovie(getTitleMovieSearch) */
  const { moviesList, isLoadingGetOnlineMovieDataBaseAutoComplete } = useSelector((state: StateStorage) => state.moviesState);
  /* const state = {} = useSelector((state: StateStorage) => state);
  console.log(state) */

  useEffect(() => {
    dispatch(getOnlineMovieDataBaseAutoComplete(title));
  }, []);
  const handleListItemClick = (movieId: string) => {
    /* console.log(movieId); */
    navigate(`/details/${movieId}`);
  };
  movies = moviesList;
  /* console.log(movies) */
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
  if (isLoadingGetOnlineMovieDataBaseAutoComplete) {
    return (
      <div className="flex justify-center items-center mt-72">
        <Loading messageLoading="Buscando peliculas..." />
      </div>
    );
  } else {
    <div className="flex justify-center items-center mt-72">
      Hubo error por favor recargue la pagina
    </div>;
  }

  return (
    <>
      <div className="flex flex-row h-screen overflow-hidden">
        <div className="w-3/5 h-screen justify-center items-center px-10 overflow-y-auto">
          <ResultList data={movies ? movies : []} onListItemClick={handleListItemClick} />
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
  );
};
