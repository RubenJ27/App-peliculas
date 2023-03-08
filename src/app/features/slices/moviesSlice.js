import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../api/ApiMovies";
import { BASE_URL_AUTOCOMPLETE } from "../../../api/ApiMovies";

const initialState = {
  isLoadingGetObtainMovies: true,
 /*  isFetchingMovieRatings: false,
  isFetchingMovieDetails: false, */
  /* isLoading: true, */
  /* errorFetchingMovieRatings: null,
  successFetchingMovieRatings: null,
  errorFetchingMovieDetails: null,
  successFetchingMovieDetails: null, */
  isLoadingOverviewDetails: true,
  isLoadingFullCredits: true,
  errorOverviewDetails: null,
  errorFullCredits: null,
  ratingsDetails: {},
  movieDetails: {},
  overviewDetails: {},
  fullCredits: {},
  getTitleMovieSearch: "",
};

// First, create the thunk

export const getObtainMovies = createAsyncThunk(
  'movies-slice/getObtainMovies',
  async (moviesState) => {
    try {
      const getMoviesResponse = await BASE_URL_AUTOCOMPLETE.get(`/?q=${moviesState}`, { headers: { "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY, "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST} });
      return getMoviesResponse.data.d;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOverviewDetails = createAsyncThunk(
  'movies-slice/getOverviewDetails',
  async (movieId) => {
    try {
      const overviewDetailsResponse = await BASE_URL.get(`/title/get-overview-details?tconst=${movieId}`, { headers: { "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY, "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST} });
      return overviewDetailsResponse.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getFullCredits = createAsyncThunk(
  'movies-slice/getFullCredits',
  async (movieId) => {
    try {
      const fullCreditsResponse = await BASE_URL.get(`/title/get-full-credits?tconst=${movieId}`, { headers: { "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY, "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST} });
      return fullCreditsResponse.data;
    } catch (error) {
      console.log(error);
    }
  }
);

/* export const fetchMovieRatings = createAsyncThunk(
  'movies-slice/fetchByIdStatus',
  async (movieId) => {
    const ratingsResponse = await BASE_URL.get(
      `title/get-ratings?tconst=${movieId}`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST
        },
      }
    )
    return ratingsResponse.data;
  }
); */



export const moviesSlice = createSlice({
  name: "movies-slice",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setTitleSearch: (state, action) => {
      state.getTitleMovieSearch = action.payload;
    },
    /* startFetchMovieRatings(state, action) {
      state.isLoading = false;
      state.isFetchingMovieRatings = true;
    }, */
    /* successFetchMovieRatings(state, action) {
      state.isLoading = false;
      state.isFetchingMovieRatings = false;
      state.ratingsDetails = action.payload;
      state.successFetchingMovieRatings = true;
      state.errorFetchingMovieRatings = null;
    }, */
    /* errorFetchMovieRatings(state, action) {
      state.isLoading = false;
      state.isFetchingMovieRatings = false;
      state.successFetchingMovieRatings = false;
      state.errorFetchingMovieRatings = action.payload.error;
      state.ratingsDetails = {};
    }, */
    /* startFetchMovieDetails(state, action) {
      state.isFetchingMovieDetails = true;
    }, */
    /* successFetchMovieDetails(state, action) {
      state.movieDetails = action.payload;
      state.isFetchingMovieDetails = false;
      state.successFetchingMovieDetails = true;
      state.errorFetchingMovieDetails = null;
    }, */
    /* errorFetchMovieDetails(state, action) {
      state.isFetchingMovieDetails = false;
      state.successFetchingMovieDetails = false;
      state.errorFetchingMovieDetails = action.payload.error;
      state.movieDetails = {};
    }, */
  },
  extraReducers: (builder) => {
    builder
    .addCase(getObtainMovies.pending, (state, action) => {
      state.isLoadingGetObtainMovies = true;
    })
    .addCase(getObtainMovies.fulfilled, (state, action) => {
      state.getMoviesList = action.payload;
      state.isLoadingGetObtainMovies = false;
    })
    .addCase(getObtainMovies.rejected, (state, action) => {
      state.isLoadingGetObtainMovies = false;
      state.getMoviesList = {};
    })
    .addCase(getOverviewDetails.pending, (state, action) => {
      state.isLoadingOverviewDetails = true;
    })
    .addCase(getOverviewDetails.fulfilled, (state, action) => {
      state.overviewDetails = action.payload;
      state.isLoadingOverviewDetails = false;
      state.errorOverviewDetails = null;
    })
    .addCase(getOverviewDetails.rejected, (state, action) => {
      state.isLoadingOverviewDetails = false;
      state.errorOverviewDetails = action.payload.error;
    })
    .addCase(getFullCredits.pending, (state, action) => {
      state.isLoadingFullCredits = true;
    })
    .addCase(getFullCredits.fulfilled, (state, action) => {
      state.fullCredits = action.payload;
      state.isLoadingFullCredits = false;
      state.errorFullCredits = null;
    })
    .addCase(getFullCredits.rejected, (state, action) => {
      state.isLoadingFullCredits = false;
      state.errorFullCredits = action.payload.error;
    })
  }
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});


const { actions, reducer } = moviesSlice;

export const {
  /* startFetchMovieRatings,
  successFetchMovieRatings,
  errorFetchMovieRatings,
  startFetchMovieDetails,
  successFetchMovieDetails,
  errorFetchMovieDetails, */
  setTitleSearch,
} = actions;


export const isLoadingGetObtainMovies = (state) => state.moviesSlice.isLoadingGetObtainMovies;

export default reducer;
