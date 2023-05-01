import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import movieTheater from '../../assets/movie-theater.png';
import Loading from '../../components/Loading';
import ResultList from './components/ResultList.js';
import { getOnlineMovieDataBaseAutoComplete } from '../../app/store/actions/online-movie-database/online-movie-database.actions';
import type { StateStorage } from '../../models/StateStorage';
import type { AppDispatch } from '../../app/store/store';

export const Results = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { title } =
    useParams(); /* El useParams gancho devuelve un objeto de pares clave/valor de los parámetros dinámicos de la URL actual que coincidieron con el <Route path>. Las rutas secundarias heredan todos los parámetros de sus rutas principales */
  /* api */
  const { moviesList, isLoadingGetOnlineMovieDataBaseAutoComplete } = useSelector(
    (state: StateStorage) => state.moviesState
  );

  useEffect(() => {
    // Si esta condicion no se cumple no se produce el efecto
    if (title === undefined) return;
    void dispatch(getOnlineMovieDataBaseAutoComplete(title));
  }, [dispatch, title]);

  const handleListItemClick = (movieId: string): void => {
    navigate(`/details/${movieId}`);
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
      <div className="flex flex-row h-screen overflow-hidden">
        <div className="w-3/5 h-screen justify-center items-center px-10 overflow-y-auto">
          {moviesList !== undefined ? (
            <ResultList data={moviesList} onListItemClick={handleListItemClick} />
          ) : (
            'No hay peliculas no disponibles'
          )}
        </div>
        <div className="w-2/5">
          <img src={movieTheater} alt="Movie Theater" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};
