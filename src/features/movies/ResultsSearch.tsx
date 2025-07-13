import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../core/components/Loading';

import { AppDispatch } from '../../store/store';
import ResultListSearch from './components/ResultsSearch/ResultListSearch';
import { getResultsSearchesMovies } from './services/online-movie-database.actions';
import { clearResultsMoviesSearchesScroll, getPageNumber } from './slices/moviesSlice';
import { StateStorage } from './types';

interface ResultsSearchProps {
  inputSearchValue: string;
}

export const ResultsSearch = ({ inputSearchValue }: ResultsSearchProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { title } = useParams();
  const {
    isLoadingGetOnlineMovieDataBaseAutoComplete,
    pageNumberIncrement,
    moviesSearchesCurrentList,
    isLoadingMoviesResultsSearches,
  } = useSelector((state: StateStorage) => state.moviesState);

  useEffect(() => {
    void dispatch(getResultsSearchesMovies({ titleMovie: inputSearchValue, page: page }));
    dispatch(clearResultsMoviesSearchesScroll());
  }, [dispatch, inputSearchValue]);

  const handleInfiniteScroll = async (): Promise<void> => {
    const isBottom =
      window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight;
    if (isBottom) {
      if (inputSearchValue.length >= 1 && !isLoadingMoviesResultsSearches) {
        dispatch(getPageNumber());
        const nextPage = pageNumberIncrement + 1;
        setPage(nextPage);
        void dispatch(getResultsSearchesMovies({ titleMovie: inputSearchValue, page: nextPage }));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => {
      window.removeEventListener('scroll', handleInfiniteScroll);
    };
  }, [dispatch, pageNumberIncrement, isLoadingMoviesResultsSearches]);

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
  } else if (moviesSearchesCurrentList?.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center mt-12 mb-12 w-full">
        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-gray-50 to-blue-200 border border-blue-200 text-blue-700 px-8 py-10 rounded-2xl shadow-2xl w-full max-w-lg h-72 animate-fade-in">
          <svg
            className="w-14 h-14 mb-4 text-blue-400 animate-pulse"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
          </svg>
          <h2 className="text-2xl font-bold mb-2 text-blue-700 drop-shadow">No se encontraron resultados</h2>
          <p className="text-center mb-4 text-base text-gray-700">
            No pudimos encontrar películas que coincidan con tu búsqueda.
            <br />
            Prueba con otro título o revisa la ortografía.
          </p>
        </div>
      </div>
    );
  } else {
    <div className="flex justify-center items-center mt-72">Hubo error por favor recargue la pagina</div>;
  }

  return (
    <>
      <div className="flex flex-col w-full h-[100%] px-5 mb-6">
        <h2 className="text-4xl font-bold font-lato text-black text-center mb-2 mt-4">Resultados Peliculas</h2>
        <div className="w-full h-[100%] mb-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-[100%] text-center justify-items-center">
            <ResultListSearch
              moviesSearchesCurrentList={moviesSearchesCurrentList}
              onListItemClick={handleListItemClick}
              isLoadingMoviesResultsSearches={isLoadingMoviesResultsSearches}
            />
          </ul>
          {isLoadingMoviesResultsSearches && <Loading messageLoading="Obteniendo informacion de la pelicula..." />}
        </div>
      </div>
    </>
  );
};
