import { createAction } from "@reduxjs/toolkit";
import {BASE_URL_RATINGS, BASE_URL_OVERVIEW_DETAILS} from "../../../api/ApiMovies"

export const startFetchMovieRating = createAction('START_FETCH_MOVIE_RATINGS');
export const successFetchMovieRating = createAction('SUCCESS_FETCH_MOVIE_RATINGS');
export const errorFetchMovieRating = createAction('ERROR_FETCH_MOVIE_RATINGS');

export const fetchMovieRatings = (movieId) => async (dispatch) => {
 try {
    dispatch(startFetchMovieRating());
    const response = await BASE_URL_RATINGS.get(`/title/get-ratings?tconst=${movieId}`, { headers: { "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY, "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"} });
    const data = response.data;
    dispatch(successFetchMovieRating({ data }));
 } catch (error) {
    dispatch(errorFetchMovieRating({ error }));
 }
}


export const startFetchMovieDetails = createAction('START_FETCH_MOVIE_DETAILS');
export const successFetchMovieDetails = createAction('SUCCESS_FETCH_MOVIE_DETAILS');
export const errorFetchMovieDetails = createAction('ERROR_FETCH_MOVIE_DETAILS');

export const fetchMovieDetails = (movieId) => async (dispatch) => {
    try {
       dispatch(startFetchMovieDetails());
       const response = await BASE_URL_OVERVIEW_DETAILS.get(`/${movieId}/get-overview-details`, { headers: { "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY, "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"} });
       const data = response.data;
       dispatch(successFetchMovieDetails({ data }));
    } catch (error) {
       dispatch(errorFetchMovieDetails({ error }));
    }
   }