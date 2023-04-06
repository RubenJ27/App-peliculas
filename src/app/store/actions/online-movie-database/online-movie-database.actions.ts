import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, BASE_URL_AUTOCOMPLETE } from "../../../../api/ApiMovies";
import {
  FullCredits,
  ResponseMovies,
} from "../../../../models/moviesInterface";

export const getOnlineMovieDataBaseAutoComplete = createAsyncThunk(
  "[Online Movie Data Base] Get Online Movie Data Base",
  async (params?: string) => {
    const getMoviesResponse = await BASE_URL_AUTOCOMPLETE.get(`/?q=${params}`, {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST,
      },
    });

    return getMoviesResponse.data.d;
  }
);

export const getOverviewDetails = createAsyncThunk(
  "[Online Movie Data Base] Get Online Overview Details Movie Data Base",
  async (params?: string) => {
    const { data } = await BASE_URL.get<ResponseMovies>(
      `/title/get-overview-details?tconst=${params}`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST,
        },
      }
    );
    return data;
  }
);

export const getFullCredits = createAsyncThunk(
  "[Online Movie Data Base] Get Online Full Credits Movie Data Base",
  async (params?: string) => {
    const { data } = await BASE_URL.get<FullCredits>(
      `/title/get-full-credits?tconst=${params}`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST,
        },
      }
    );
    return data;
  }
);
