import React, { useEffect } from "react";

import LeftContainer from "../pages/components/LeftContainer";
import RightContainer from "../pages/components/RightContainer";
import Loading from "../components/Loading";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieRatings,
  fetchMovieDetails,
} from "../app/features/actions/movies";

export const Details = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const {
    isFetchingMovieRatings,
    isFetchingMovieDetails,
    isLoading,
    errorFetchingMovieRatings,
    errorFetchingMovieDetails,
    ratingsDetails,
    movieDetails,
  } = useSelector((state) => state.moviesSlice);
  useEffect(() => {
    dispatch(fetchMovieRatings(movieId));
  }, [dispatch, movieId]);

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  const renderContent = () => {
    if (isLoading || isFetchingMovieDetails || isFetchingMovieRatings) {
      return <Loading messageLoading="Obteniendo informacion de la pelicula..." />
    } else if (errorFetchingMovieDetails || errorFetchingMovieRatings) {
      return <p>Ha ocurrido un error al obtener la informacion de la pelicula</p>
    }
    return (
      <>
      <LeftContainer imageUrl={`${movieDetails.details?.image?.url}`} />
      <RightContainer
          title={movieDetails.details?.title ?? 'Sin titulo'}
          year={movieDetails.details?.year ?? 'No disponible'}
          rating={ratingsDetails.ratings.rating}
          synopsis={movieDetails.overview.plotSummary?.text ?? 'No disponible'}
          genres={movieDetails.overview?.genres ?? 'No disponible'}
          cast={movieCast}
        />
      </>
    )
  }

  

  const movieCast = movieDetails?.fullCredits?.cast?.slice(0, 20) ?? [];
  return (
    <>
      <div className="flex flex-row px-16 h-screen items-center justify-center">
        {renderContent()}
      </div>
    </>
  );
};
