import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Loading from '../../core/components/Loading';

import { AppDispatch } from '../../store/store';
import ResultList from './components/Results/ResultList';
import { getDiscoverMovies } from './services/online-movie-database.actions';
import {
  clearResultsDiscoverMoviesScroll,
  clearResultsMoviesSearchesScroll,
  getPageNumber,
} from './slices/moviesSlice';
import { StateStorage } from './types';

export const Results = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { title } = useParams();
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
    void dispatch(getDiscoverMovies(1));
    dispatch(clearResultsDiscoverMoviesScroll());
    dispatch(clearResultsMoviesSearchesScroll());
  }, [dispatch]);

  const handleInfiniteScroll = async (): Promise<void> => {
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
      </div>
    </>
  );
};
