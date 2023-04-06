import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import movieTheater from "../../assets/movie-theater.png";
import Loading from "../../components/Loading";
import ResultList from "./components/ResultList.js";
import { getOnlineMovieDataBaseAutoComplete } from "../../app/store/actions/online-movie-database/online-movie-database.actions";
import { StateStorage } from "../../models/StateStorage";
import { AppDispatch } from "../../app/store/store";

export const Results = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { title } = useParams(); /* El useParams gancho devuelve un objeto de pares clave/valor de los parámetros dinámicos de la URL actual que coincidieron con el <Route path>. Las rutas secundarias heredan todos los parámetros de sus rutas principales*/
  /* api */
  const { moviesList, isLoadingGetOnlineMovieDataBaseAutoComplete } = useSelector((state: StateStorage) => state.moviesState);

  useEffect(() => {

    //TODO : Configurar el eslint con ts-standard, y el prettier, y .editorconfig

    //TODO : En toda la aplicacion cada vez que hagas un dispatch o se ejecute un metodo asincrono no va a guardarse en ninguna variable se debe colocar un void 
    void dispatch(getOnlineMovieDataBaseAutoComplete(title));
  }, []);
  const handleListItemClick = (movieId: string) => {
    navigate(`/details/${movieId}`);
  };

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
          <ResultList data={moviesList ? moviesList : []} onListItemClick={handleListItemClick} />
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
