import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../core/components/Loading';
import { AppDispatch } from '../../store/store';
import { LeftContainer } from './components/Details/LeftContainer';
import RightContainer from './components/Details/RightContainer';
import { getDetailsMovie } from './services/online-movie-database.actions';
import { StateStorage } from './types';

export const Details = (): JSX.Element => {
  const { movieId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const {
    overviewDetails,
    isLoadingOverviewDetails,
    errorOverviewDetails,
    fullCredits,
    errorFullCredits,
    movieDetails,
    isLoadingMovieDetails,
    errorMovieDetails,
  } = useSelector((state: StateStorage) => state.moviesState);

  useEffect(() => {
    if (movieId === undefined) return;
    void dispatch(getDetailsMovie(movieId));
  }, [dispatch, movieId]);

  const renderContent = (): JSX.Element => {
    if (isLoadingMovieDetails) {
      return <Loading messageLoading="Obteniendo informacion de la pelicula..." />;
    } else if (errorMovieDetails !== null) {
      return <p>Ha ocurrido un error al obtener la informacion de la pelicula</p>;
    }
    return (
      <>
        <LeftContainer data={movieDetails?.data ?? {}} />
        <RightContainer
          title={movieDetails?.data?.original_title}
          overview={movieDetails?.data?.overview}
          genres={movieDetails?.data?.genres}
          release_date={movieDetails?.data?.release_date}
        />
      </>
    );
  };

  return (
    <>
      <div className="flex flex-row px-16 h-screen items-center justify-center">{renderContent()}</div>
    </>
  );
};
