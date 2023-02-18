import React from "react";

import { createAction } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../api/ApiMovies";

export const startFetchMovieRatings = createAction("START_FETCH_MOVIE_RATINGS");
export const successFetchMovieRatings = createAction("SUCCESS_FETCH_MOVIE_RATINGS");
export const errorFetchMovieRatings = createAction("ERROR_FETCH_MOVIE_RATINGS");

export const fetchMovieRatings = (movieId) => async (dispatch) => {
  try {
    dispatch(startFetchMovieRatings());
    const ratingsResponse = await BASE_URL.get(
      `title/get-ratings?tconst=${movieId}`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST
        },
      }
    );
    const ratingsData = ratingsResponse.data;
    dispatch(successFetchMovieRatings({ ratings: ratingsData }));
  } catch (error) {
    dispatch(errorFetchMovieRatings({ error }));
  }
};

export const startFetchMovieDetails = createAction("START_FETCH_MOVIE_DETAILS");
export const successFetchMovieDetails = createAction(
  "SUCCESS_FETCH_MOVIE_DETAILS"
);
export const errorFetchMovieDetails = createAction("ERROR_FETCH_MOVIE_DETAILS");

export const fetchMovieDetails = (movieId) => async (dispatch) => {
  try {
    dispatch(startFetchMovieDetails());
    const overviewDetailsResponse = await BASE_URL.get(
      `/title/get-overview-details?tconst=${movieId}`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST
        },
      }
    );
    const overviewDetailsData = overviewDetailsResponse.data;

    const topCastResponse = await BASE_URL.get(
      `/title/get-top-cast?tconst=${movieId}`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST
        },
      }
    );
    const topCastResponseData = topCastResponse.data;

    const detailsResponse = await BASE_URL.get(
      `/title/get-details?tconst=${movieId}`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST
        },
      }
    );
    const detailsResponseData = detailsResponse.data;

    const fullCreditsResponse = await BASE_URL.get(
      `/title/get-full-credits?tconst=${movieId}`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST
        },
      }
    );
    const fullCreditsData = fullCreditsResponse.data;

    dispatch(
      successFetchMovieDetails({
        overview: overviewDetailsData,
        topCats: topCastResponseData,
        details: detailsResponseData,
        fullCredits: fullCreditsData,
      })
    );
  } catch (error) {
    dispatch(errorFetchMovieDetails({ error }));
  }
};
