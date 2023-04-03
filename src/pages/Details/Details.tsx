import React, { useEffect } from "react";

import LeftContainer from "../Details/components/LeftContainer";
import RightContainer from "../Details/components/RightContainer";
import { getOverviewDetails } from "../../app/store/actions/online-movie-database/online-movie-database.actions";
import Loading from "../../components/Loading";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
/* import {
  fetchMovieRatings,
  fetchMovieDetails,
} from "../app/features/actions/movies"; */
import {
  getFullCredits,
} from "../../app/store/slices/moviesSlice";
import { StateStorage } from "../../models/StateStorage";
import { AppDispatch } from "../../app/store/store";

export const Details = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
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
    /* fullCredits, */
    isLoadingFullCredits,
    errorFullCredits,
  } = useSelector((state: StateStorage) => state.moviesState);
  useEffect(() => {
    dispatch(getOverviewDetails(movieId));
    /*     dispatch(getFullCredits(movieId)); */
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
    return (
      <>
        {/* <LeftContainer url={`${overviewDetails.title?.image?.url}`} /> */}
        {/* {<LeftContainer url={overviewDetails?.title?.image?.url ?? "/nodisponible.png"} />} */}
        <LeftContainer title={overviewDetails?.title ?? {}} />
        <RightContainer
          title={overviewDetails.title}
          ratings={overviewDetails.ratings}
          protSummary={overviewDetails.protSummary}
          genres={overviewDetails.genres}
        /* cast={movieCast} */
        />
        {/* <RightContainer
          title={overviewDetails.title?.title ?? "Sin titulo"}
          year={overviewDetails.title?.year ?? "No disponible"}
          rating={overviewDetails.ratings.rating}
          synopsis={overviewDetails.plotSummary?.text ?? "No disponible"}
          genres={overviewDetails.genres ?? "No disponible"}
          cast={movieCast}
        /> */}
      </>
    );
  };

  /* const movieCast = fullCredits?.cast?.slice(0, 20) ?? []; */

  return (
    <>
      <div className="flex flex-row px-16 h-screen items-center justify-center">
        {renderContent()}
      </div>
    </>
  );
};
