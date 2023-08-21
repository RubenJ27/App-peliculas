import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getDetailsMovie } from '../../app/store/actions/online-movie-database/online-movie-database.actions';
import type { AppDispatch } from '../../app/store/store';
import Loading from '../../components/Loading';
import type { StateStorage } from '../../models/StateStorage';
import { LeftContainer } from '../Details/components/LeftContainer';
import RightContainer from '../Details/components/RightContainer';

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
    /* void dispatch(getOverviewDetails(movieId));
    void dispatch(getFullCredits(movieId)); */
    void dispatch(getDetailsMovie(movieId));
  }, [dispatch, movieId]);

  const renderContent = (): JSX.Element => {
    if (isLoadingMovieDetails) {
      return <Loading messageLoading="Obteniendo informacion de la pelicula..." />;
    } else if (errorMovieDetails !== null) {
      return <p>Ha ocurrido un error al obtener la informacion de la pelicula</p>;
    }
    console.log('movieDetails?.data', movieDetails?.data);

    return (
      <>
        <LeftContainer data={movieDetails?.data ?? {}} />
        <RightContainer
          title={movieDetails?.data?.original_title}
          /* ratings={overviewDetails.ratings}
          protSummary={overviewDetails.protSummary} */
          overview={movieDetails?.data?.overview}
          genres={movieDetails?.data?.genres}
          release_date={movieDetails?.data?.release_date}
          /* cast={fullCredits?.cast} */
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
