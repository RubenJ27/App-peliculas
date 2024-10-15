import { createSlice } from '@reduxjs/toolkit';
import {
  getDetailsMovie,
  getDiscoverMovies,
  getResultsSearchesMovies,
} from '../actions/online-movie-database/online-movie-database.actions';

import type { PayloadAction } from '@reduxjs/toolkit';
import type {
  /* este es el nombre del reducer */
  ResultListDiscoverData,
  ResultMovieDetailsData,
} from '../../models/interfaces/MovieInterface';
import { MoviesState } from '../../models/states/MovieState';
import type { StateStorage } from '../../models/states/StateStorage';

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
  /* segundo state para nueva api */
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

// First, create the thunk

export const moviesSlice = createSlice({
  name: 'moviesState' /* este es el nombre del reducer */,
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getPageNumber: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      state.pageNumberIncrement += 1; /* Como anotacion a destacar en redux toolkit el operador incremental es += como se evidencia en este caso */
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
      .addCase(getDiscoverMovies.pending, (state, action) => {
        state.isLoadingMoviesDiscover = true;
      })
      .addCase(getDiscoverMovies.fulfilled, (state, action: PayloadAction<ResultListDiscoverData>) => {
        const resultsMoviesScroll = action.payload.data?.results;
        state.moviesDiscoverCurrentList = resultsMoviesScroll;
        /* Si results ya existe en state.moviesDiscover.data, significa que ya hay una lista de películas en el estado. En este caso, simplemente agregamos las nuevas películas a esta lista utilizando push(...resultsMoviesScroll). */
        if (resultsMoviesScroll !== undefined && resultsMoviesScroll !== null) {
          if (state.moviesDiscover.data?.results !== null && state.moviesDiscover.data?.results !== undefined) {
            state.moviesDiscover.data.results.push(...resultsMoviesScroll);
          } else {
            state.moviesDiscover.data = { results: resultsMoviesScroll };
          }
        }

        /* Si results no existe en state.moviesDiscover.data, significa que aún no hay una lista de películas en el estado. En este caso, creamos un nuevo objeto con una propiedad results que contiene las nuevas películas, y luego asignamos este objeto a state.moviesDiscover.data.
        La parte del else se encarga de manejar el caso en el que aún no existe una lista de películas en el estado. En este caso, creamos una nueva lista de películas con las películas recién cargadas y la asignamos al estado. */

        state.moviesDiscoverCurrentList = state.moviesDiscover.data?.results;
        state.isLoadingMoviesDiscover = false;
        state.errorMoviesDiscover = null;
      })
      .addCase(getDiscoverMovies.rejected, (state, action) => {
        state.isLoadingMoviesDiscover = false;
      })
      .addCase(getResultsSearchesMovies.pending, (state, action) => {
        state.isLoadingMoviesResultsSearches = true;
      })
      .addCase(getResultsSearchesMovies.fulfilled, (state, action: PayloadAction<ResultListDiscoverData>) => {
        const resultsMoviesScroll = action.payload.data?.results;

        if (resultsMoviesScroll !== undefined) {
          if (state.moviesSearchesCurrentList !== undefined) {
            // Crear una nueva lista con los resultados existentes y los nuevos resultados
            state.moviesSearchesCurrentList = [...state.moviesSearchesCurrentList, ...resultsMoviesScroll];
          }
        }

        state.isLoadingMoviesResultsSearches = false;
        state.errorMoviesDiscover = null;
      })
      .addCase(getResultsSearchesMovies.rejected, (state, action) => {
        state.isLoadingMoviesResultsSearches = false;
      })
      .addCase(getDetailsMovie.pending, (state, action) => {
        state.isLoadingMovieDetails = true;
      })
      .addCase(getDetailsMovie.fulfilled, (state, action: PayloadAction<ResultMovieDetailsData>) => {
        state.movieDetails = action.payload;
        state.isLoadingMovieDetails = false;
        state.errorMovieDetails = null;
      })
      .addCase(getDetailsMovie.rejected, (state, action) => {
        state.isLoadingMovieDetails = false;
      });
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const { getPageNumber, clearResultsDiscoverMoviesScroll, clearResultsMoviesSearchesScroll } =
  moviesSlice.actions;

export const isLoadingGetOnlineMovieDataBaseAutoComplete = (state: StateStorage): boolean =>
  state.moviesState.isLoadingGetOnlineMovieDataBaseAutoComplete;

export default moviesSlice.reducer;
