import {
  FullCredits,
  MoviesList,
  MoviesListData,
  ResponseMovies,
  ResultListDiscoverData,
  ResultListTrendingData,
  ResultMovieDetailsData,
  Results,
  ResultSearchesMoviesData,
} from './MovieInterface';

export interface MoviesState {
  moviesList?: MoviesListData[];
  movies?: MoviesListData[];
  data?: MoviesList[];
  isLoadingGetOnlineMovieDataBaseAutoComplete: boolean;
  overviewDetails: ResponseMovies;
  isLoadingOverviewDetails: boolean;
  errorOverviewDetails: null;
  fullCredits: FullCredits;
  isLoadingFullCredits: boolean;
  errorFullCredits: null;
  movieId: string;
  /* Nuevas peticiones de la api */
  moviesTrendingDay: ResultListTrendingData;
  isLoadingMoviesTrendingDay: boolean;
  errorMoviesTrendingDay: null;
  moviesDiscover: ResultListDiscoverData;
  moviesDiscoverCurrentList?: Results[];
  isLoadingMoviesDiscover: boolean;
  pageNumberCurrent: number;
  pageNumberIncrement: number;
  errorMoviesDiscover: null;
  movieDetails: ResultMovieDetailsData;
  isLoadingMovieDetails: boolean;
  errorMovieDetails: null;
  movieCredits: any;
  isLoadingMovieCredits: boolean;
  errorMovieCredits: null;
  moviesResultsSearches: ResultSearchesMoviesData;
  moviesSearchesCurrentList?: Results[];
  isLoadingMoviesResultsSearches: boolean;
  errorMoviesResultsSearches: null;
}
