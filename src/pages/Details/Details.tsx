import React, { useEffect } from "react";

import LeftContainer from "../Details/components/LeftContainer";
import RightContainer from "../Details/components/RightContainer";
import { getFullCredits, getOverviewDetails, } from "../../app/store/actions/online-movie-database/online-movie-database.actions";
import Loading from "../../components/Loading";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
/* import {
  fetchMovieRatings,
  fetchMovieDetails,
} from "../app/features/actions/movies"; */
import { StateStorage } from "../../models/StateStorage";
import { AppDispatch } from "../../app/store/store";

export const Details = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const {
    overviewDetails,
    isLoadingOverviewDetails,
    errorOverviewDetails,
    fullCredits,
    isLoadingFullCredits,
    errorFullCredits,
  } = useSelector((state: StateStorage) => state.moviesState);
  useEffect(() => {
    dispatch(getOverviewDetails(movieId));
    dispatch(getFullCredits(movieId));
    /* dispatch(fetchMovieDetails(movieId)); */
  }, [movieId]);
  const renderContent = () => {
    if (isLoadingOverviewDetails /* || isLoadingFullCredits */) {
      return (
        <Loading messageLoading="Obteniendo informacion de la pelicula..." />
      );
    } else if (errorOverviewDetails || errorFullCredits) {
      return (
        <p>Ha ocurrido un error al obtener la informacion de la pelicula</p>
      );
    }
    console.log(fullCredits)
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
