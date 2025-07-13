import { createSlice } from '@reduxjs/toolkit';
import {
  getDetailsMovie,
  getDiscoverMovies,
  getResultsSearchesMovies,
} from '../services/online-movie-database.actions';

import type { PayloadAction } from '@reduxjs/toolkit';
import { StateStorage } from '../types';
import type { ResultListDiscoverData, ResultMovieDetailsData } from '../types/MovieInterface';
import { MoviesState } from '../types/MovieState';

const initialState: MoviesState = {
  moviesList: [],
  isLoadingGetOnlineMovieDataBaseAutoComplete: false,
  overviewDetails: {},
  isLoadingOverviewDetails: true,
  errorOverviewDetails: null,
  fullCredits: {},
  isLoadingFullCredits: true,
  errorFullCredits: null,
  movieId: '',
  moviesTrendingDay: {},
  isLoadingMoviesTrendingDay: true,
  errorMoviesTrendingDay: null,
  movieDetails: {},
  isLoadingMovieDetails: true,
  errorMovieDetails: null,
  movieCredits: {},
  isLoadingMovieCredits: true,
  errorMovieCredits: null,
  moviesDiscover: {},
  moviesDiscoverCurrentList: [],
  isLoadingMoviesDiscover: true,
  errorMoviesDiscover: null,
  moviesResultsSearches: {},
  moviesSearchesCurrentList: [],
  isLoadingMoviesResultsSearches: true,
  errorMoviesResultsSearches: null,
  pageNumberCurrent: 1,
  pageNumberIncrement: 1,
};

export const moviesSlice = createSlice({
  name: 'moviesState',
  initialState,
  reducers: {
    getPageNumber: (state) => {
      state.pageNumberIncrement += 1;
    },
    clearResultsDiscoverMoviesScroll: (state) => {
      state.moviesDiscover = {};
      state.moviesDiscoverCurrentList = [];
    },
    clearResultsMoviesSearchesScroll: (state) => {
      state.moviesSearchesCurrentList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDiscoverMovies.pending, (state) => {
        state.isLoadingMoviesDiscover = true;
      })
      .addCase(getDiscoverMovies.fulfilled, (state, action: PayloadAction<ResultListDiscoverData>) => {
        const resultsMoviesScroll = action.payload.data?.results;
        state.moviesDiscoverCurrentList = resultsMoviesScroll;
        if (resultsMoviesScroll !== undefined && resultsMoviesScroll !== null) {
          if (state.moviesDiscover.data?.results !== null && state.moviesDiscover.data?.results !== undefined) {
            state.moviesDiscover.data.results.push(...resultsMoviesScroll);
          } else {
            state.moviesDiscover.data = { results: resultsMoviesScroll };
          }
        }
        state.moviesDiscoverCurrentList = state.moviesDiscover.data?.results;
        state.isLoadingMoviesDiscover = false;
        state.errorMoviesDiscover = null;
      })
      .addCase(getDiscoverMovies.rejected, (state) => {
        state.isLoadingMoviesDiscover = false;
      })
      .addCase(getResultsSearchesMovies.pending, (state) => {
        state.isLoadingMoviesResultsSearches = true;
      })
      .addCase(getResultsSearchesMovies.fulfilled, (state, action: PayloadAction<ResultListDiscoverData>) => {
        const resultsMoviesScroll = action.payload.data?.results;
        if (resultsMoviesScroll !== undefined) {
          if (state.moviesSearchesCurrentList !== undefined) {
            state.moviesSearchesCurrentList = [...state.moviesSearchesCurrentList, ...resultsMoviesScroll];
          }
        }
        state.isLoadingMoviesResultsSearches = false;
        state.errorMoviesDiscover = null;
      })
      .addCase(getResultsSearchesMovies.rejected, (state) => {
        state.isLoadingMoviesResultsSearches = false;
      })
      .addCase(getDetailsMovie.pending, (state) => {
        state.isLoadingMovieDetails = true;
      })
      .addCase(getDetailsMovie.fulfilled, (state, action: PayloadAction<ResultMovieDetailsData>) => {
        state.movieDetails = action.payload;
        state.isLoadingMovieDetails = false;
        state.errorMovieDetails = null;
      })
      .addCase(getDetailsMovie.rejected, (state) => {
        state.isLoadingMovieDetails = false;
      });
  },
});

export const { getPageNumber, clearResultsDiscoverMoviesScroll, clearResultsMoviesSearchesScroll } =
  moviesSlice.actions;

export const isLoadingGetOnlineMovieDataBaseAutoComplete = (state: StateStorage): boolean =>
  state.moviesState.isLoadingGetOnlineMovieDataBaseAutoComplete;

export default moviesSlice.reducer;
