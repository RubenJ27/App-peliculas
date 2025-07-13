import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, BASE_URL_SEARCH } from '../../../api/ApiMovies';
import type { FullCredits, ResponseMovies, ResultMovieDetailsData } from '../types/MovieInterface';

export const getOverviewDetails = createAsyncThunk(
  '[Online Movie Data Base] Get Online Overview Details Movie Data Base',
  async (params: string) => {
    const { data } = await BASE_URL.get<ResponseMovies>(`/title/get-overview-details?tconst=${params}`, {
      headers: {
        'X-RapidAPI-Key': process.env.VITE_APP_API_KEY,
        'X-RapidAPI-Host': process.env.VITE_APP_API_HOST,
      },
    });
    return data;
  }
);

export const getFullCredits = createAsyncThunk(
  '[Online Movie Data Base] Get Online Full Credits Movie Data Base',
  async (params: string) => {
    const { data } = await BASE_URL.get<FullCredits>(`/title/get-full-credits?tconst=${params}`, {
      headers: {
        'X-RapidAPI-Key': process.env.VITE_APP_API_KEY,
        'X-RapidAPI-Host': process.env.VITE_APP_API_HOST,
      },
    });
    return data;
  }
);

export const getTrendingMoviesDay = createAsyncThunk(
  '[The Movie db ] Get The Movie db Trending Movies Day',
  async () => {
    const getTrendingMoviesResponse = await BASE_URL.get(`/trending/movie/day`, {
      headers: {
        accept: process.env.VITE_APP_API_KEY,
        Authorization: process.env.VITE_APP_API_HOST,
      },
    });
    const getTrendingMoviesData = JSON.parse(JSON.stringify(getTrendingMoviesResponse));
    return getTrendingMoviesData;
  }
);

export const getDiscoverMovies = createAsyncThunk(
  '[The Movie db ] Get The Movie db Discover Movies',
  async (payload?: number) => {
    const getDiscoverMoviesResponse = await BASE_URL.get(`/discover/movie?page=${payload}`, {
      headers: {
        accept: process.env.VITE_APP_API_KEY,
        Authorization: process.env.VITE_APP_API_HOST,
      },
    });
    const getDiscoverMoviesData = JSON.parse(JSON.stringify(getDiscoverMoviesResponse));
    return getDiscoverMoviesData;
  }
);

export const getDetailsMovie = createAsyncThunk(
  '[The Movie db ] Get The Movie db Details Movie',
  async (payload: string): Promise<ResultMovieDetailsData> => {
    const getDetailsMovieResponse = await BASE_URL.get(`/movie/${payload}`, {
      headers: {
        accept: process.env.VITE_APP_API_KEY,
        Authorization: process.env.VITE_APP_API_HOST,
      },
    });
    const getDetailsMovieData = JSON.parse(JSON.stringify(getDetailsMovieResponse));
    return getDetailsMovieData;
  }
);

export const getCreditsMovie = createAsyncThunk(
  '[The Movie db ] Get The Movie db Credits Movie',
  async (payload: string): Promise<any> => {
    const getCreditsMovieResponse = await BASE_URL.get(`/movie/${payload}/credits`, {
      headers: {
        accept: process.env.VITE_APP_API_KEY,
        Authorization: process.env.VITE_APP_API_HOST,
      },
    });
    const getCreditsMovieData = JSON.parse(JSON.stringify(getCreditsMovieResponse));
    return getCreditsMovieData;
  }
);

export const getResultsSearchesMovies = createAsyncThunk(
  '[The Movie db ] Get The Movie db Credits Movie',
  async ({ titleMovie, page }: any) => {
    const getResultsSearchesMoviesResponse = await BASE_URL_SEARCH.get(`/movie?query=${titleMovie}&page=${page}`, {
      headers: {
        accept: process.env.VITE_APP_API_KEY,
        Authorization: process.env.VITE_APP_API_HOST,
      },
    });
    const getResultsSearchesMoviesData = JSON.parse(JSON.stringify(getResultsSearchesMoviesResponse));
    return getResultsSearchesMoviesData;
  }
);
