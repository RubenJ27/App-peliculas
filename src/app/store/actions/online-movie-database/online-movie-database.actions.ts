import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_AUTOCOMPLETE } from "../../../../api/ApiMovies";
import { MoviesListData, MoviesState } from "../../../../models/movies";

export const getOnlineMovieDataBaseAutoComplete = createAsyncThunk(
  "[Online Movie Data Base] Get Online Movie Data Base",
  async (params?: string) => {
    const getMoviesResponse = await BASE_URL_AUTOCOMPLETE.get(`/?q=${params}`, {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST,
      },
    });

    /* let getMoviesResponseData = getMoviesResponse.data.d as MoviesListData[]; */
    return getMoviesResponse.data.d;
  }
);
