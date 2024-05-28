import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { getDiscoverMovies } from '../../app/store/actions/online-movie-database/online-movie-database.actions';
import {
  clearResultsDiscoverMoviesScroll,
  clearResultsMoviesSearchesScroll,
  getPageNumber,
} from '../../app/store/slices/moviesSlice';
import type { AppDispatch } from '../../app/store/store';
import Loading from '../../components/Loading';
import type { StateStorage } from '../../models/StateStorage';
import ResultList from './components/ResultList';

export const Results = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { title } =
    useParams(); /* El useParams gancho devuelve un objeto de pares clave/valor de los parámetros dinámicos de la URL actual que coincidieron con el <Route path>. Las rutas secundarias heredan todos los parámetros de sus rutas principales */
  /* api */
  const {
    moviesList,
    isLoadingGetOnlineMovieDataBaseAutoComplete,
    moviesTrendingDay,
    moviesDiscover,
    moviesDiscoverCurrentList,
    isLoadingMoviesDiscover,
    pageNumberCurrent,
    pageNumberIncrement,
  } = useSelector((state: StateStorage) => state.moviesState);

  useEffect(() => {
    /* void dispatch(getTrendingMoviesDay()); */

    void dispatch(getDiscoverMovies(1));
    dispatch(clearResultsDiscoverMoviesScroll());
    dispatch(clearResultsMoviesSearchesScroll());
  }, [dispatch]);

  const handleInfiniteScroll = async (): Promise<void> => {
    /* scrollHeight devuelve la altura de todo el documento, en píxeles. */
    // console.log(`scrollHeight ${document.documentElement.scrollHeight}`);
    /* innerHeight devuelve el número de píxeles que el documento se ha desplazado verticalmente. es la altura de la ventana gráfica, es una propiedad que se utiliza en programación web para obtener la altura visible del área de contenido en la ventana del navegador */
    // console.log(`innerHeight  ${window.innerHeight}`);
    /* scrollTop es la cantidad de píxeles que se ha desplazado el documento */
    // console.log(`scrollTop ${document.documentElement.scrollTop}`);
    const isBottom =
      window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight;
    if (isBottom) {
      dispatch(getPageNumber());
      const nextPage = pageNumberIncrement + 1;
      setPage(nextPage);
      void dispatch(getDiscoverMovies(nextPage));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => {
      window.removeEventListener('scroll', handleInfiniteScroll);
    };
  }, [pageNumberIncrement, dispatch]);

  useEffect(() => {
    // Dispatch initial actions here if needed
  }, [dispatch]);

  const handleListItemClick = (movieId: number): void => {
    navigate(`/movies/${movieId}`);
  };

  if (isLoadingGetOnlineMovieDataBaseAutoComplete) {
    return (
      <div className="flex justify-center items-center mt-72">
        <Loading messageLoading="Buscando peliculas..." />
      </div>
    );
  } else {
    <div className="flex justify-center items-center mt-72">Hubo error por favor recargue la pagina</div>;
  }

  return (
    <>
      <div className="flex flex-wrap flex-col w-full h-[100%] px-5 mb-6">
        <h2 className="text-4xl font-bold font-lato text-black text-center mb-2 mt-4">Peliculas</h2>
        <div className="w-full h-[100%] mb-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-[100%] text-center justify-items-center">
            <ResultList
              moviesDiscoverCurrentList={moviesDiscoverCurrentList}
              onListItemClick={handleListItemClick}
              isLoadingMoviesDiscover={isLoadingMoviesDiscover}
            />
          </ul>
          {isLoadingMoviesDiscover && <Loading messageLoading="Obteniendo informacion de la pelicula..." />}
        </div>
        {/* <div className="flex flex-col w-full h-[100%] px-5 mb-6">
        <h2 className="text-4xl font-bold font-lato text-black text-center mb-2 mt-4">Peliculas</h2>
        <div className="w-full h-[100%] mb-6">
          {pageNumberIncrement >= 1 ? (
            <ul className="grid grid-cols-4 gap-4 w-full h-[100%] text-center justify-items-center">
              <ResultList data={moviesDiscover.data} onListItemClick={handleListItemClick} />
            </ul>
          ) : (
            ''
          )}
        </div> */}
        {/* {moviesList !== undefined ? (
          <ResultList data={moviesTrendingDay.data} onListItemClick={handleListItemClick} />
        ) : (
          'No hay peliculas no disponibles'
        )} */}
      </div>
      {/* {loading ? (
        <Loading messageLoading="Obteniendo informacion de la pelicula..." />
      ) : (
        <div className="flex flex-col w-full h-[100%] px-5 mb-6">
          <div className="w-full h-[100%] mb-6">
            <ul className="grid grid-cols-4 gap-4 w-full h-[100%] text-center justify-items-center">
              <ResultList data={moviesDiscover.data} onListItemClick={handleListItemClick} />
            </ul>
          </div>
        </div>
      )} */}
    </>
  );
};
