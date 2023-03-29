import React, { useEffect } from "react";

import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import Loading from "./components/Loading";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
/* import {
  fetchMovieRatings,
  fetchMovieDetails,
} from "../app/features/actions/movies"; */
import {
  getOverviewDetails,
  getFullCredits,
} from "../app/store/slices/movies";

export const Details = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const {
    /* isFetchingMovieRatings,
    isFetchingMovieDetails, */
    /* isLoading,
    errorFetchingMovieRatings,
    errorFetchingMovieDetails, */
    /* movieDetails, */
    overviewDetails,
    isLoadingOverviewDetails,
    errorOverviewDetails,
    fullCredits,
    isLoadingFullCredits,
    errorFullCredits,
  } = useSelector((state) => state.moviesSlice);
  useEffect(() => {
    dispatch(getOverviewDetails(movieId));
    dispatch(getFullCredits(movieId));
    /* dispatch(fetchMovieDetails(movieId)); */
  }, [dispatch, movieId]);

  const renderContent = () => {
    if (isLoadingOverviewDetails || isLoadingFullCredits) {
      return (
        <Loading messageLoading="Obteniendo informacion de la pelicula..." />
      );
    } else if (errorOverviewDetails || errorFullCredits) {
      return (
        <p>Ha ocurrido un error al obtener la informacion de la pelicula</p>
      );
    }
    return (
      <>
        <LeftContainer imageUrl={`${overviewDetails.title?.image?.url}`} />
        <RightContainer
          title={overviewDetails.title?.title ?? "Sin titulo"}
          year={overviewDetails.title?.year ?? "No disponible"}
          rating={overviewDetails.ratings.rating}
          synopsis={overviewDetails.plotSummary?.text ?? "No disponible"}
          genres={overviewDetails.genres ?? "No disponible"}
          cast={movieCast}
        />
      </>
    );
  };

  const movieCast = fullCredits?.cast?.slice(0, 20) ?? [];

  return (
    <>
      <div className="flex flex-row px-16 h-screen items-center justify-center">
        {renderContent()}
      </div>
    </>
  );
};
