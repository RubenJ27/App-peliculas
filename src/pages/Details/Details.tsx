import { useEffect } from 'react';

import { LeftContainer } from '../Details/components/LeftContainer';
import RightContainer from '../Details/components/RightContainer';
import {
  getFullCredits,
  getOverviewDetails,
} from '../../app/store/actions/online-movie-database/online-movie-database.actions';
import Loading from '../../components/Loading';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import type { StateStorage } from '../../models/StateStorage';
import type { AppDispatch } from '../../app/store/store';

export const Details = (): JSX.Element => {
  const { movieId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const {
    overviewDetails,
    isLoadingOverviewDetails,
    errorOverviewDetails,
    fullCredits,
    errorFullCredits,
  } = useSelector((state: StateStorage) => state.moviesState);

  useEffect(() => {
    if (movieId === undefined) return
    void dispatch(getOverviewDetails(movieId));
    void dispatch(getFullCredits(movieId));
  }, [dispatch, movieId]);

  const renderContent = (): JSX.Element => {
    if (isLoadingOverviewDetails) {
      return (
        <Loading messageLoading="Obteniendo informacion de la pelicula..." />
      );
    } else if (errorOverviewDetails !== null || errorFullCredits !== null) {
      return (
        <p>Ha ocurrido un error al obtener la informacion de la pelicula</p>
      );
    }
    return (
      <>
        <LeftContainer title={overviewDetails?.title ?? {}} />
        <RightContainer
          title={overviewDetails.title}
          ratings={overviewDetails.ratings}
          protSummary={overviewDetails.protSummary}
          genres={overviewDetails.genres}
          cast={fullCredits?.cast}
        />
      </>
    );
  };

  return (
    <>
      <div className="flex flex-row px-16 h-screen items-center justify-center">
        {renderContent()}
      </div>
    </>
  );
};
