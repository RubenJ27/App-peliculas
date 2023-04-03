import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { string } from "yup";
import { BASE_URL } from "../../../api/ApiMovies";
import {
  MoviesListData,
  MoviesState /* este es el nombre del reducer */,
} from "../../../models/movies";
import { StateStorage } from "../../../models/StateStorage";
import {
  getOnlineMovieDataBaseAutoComplete,
  getOverviewDetails,
} from "../actions/online-movie-database/online-movie-database.actions";
import { ResponseMovies } from "../../../entities/moviesInterface";

const initialState: MoviesState = {
  moviesList: [],
  isLoadingGetOnlineMovieDataBaseAutoComplete: false,
  overviewDetails: {},
  isLoadingOverviewDetails: true,
  errorOverviewDetails: null,
  /* fullCredits: {}, */
  isLoadingFullCredits: true,
  errorFullCredits: null,
  movieId: "",
};

// First, create the thunk

export const getFullCredits = createAsyncThunk(
  "movies-slice/getFullCredits",
  async (movieId) => {
    try {
      const fullCreditsResponse = await BASE_URL.get(
        `/title/get-full-credits?tconst=${movieId}`,
        {
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
            "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST,
          },
        }
      );
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
  name: "moviesState" /* este es el nombre del reducer */,
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    /* setTitleSearch: (state, action) => {
      state.getTitleMovieSearch = action.payload;
    }, */
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
      .addCase(getOnlineMovieDataBaseAutoComplete.pending, (state) => {
        state.isLoadingGetOnlineMovieDataBaseAutoComplete = true;
      })
      .addCase(
        getOnlineMovieDataBaseAutoComplete.fulfilled,
        (state, action: PayloadAction<MoviesListData[]>) => {
          state.isLoadingGetOnlineMovieDataBaseAutoComplete = false;
          /* state.moviesList = action.payload; */
          state.moviesList = action.payload; /* 
            Payload o carga util
            La propiedad opcional payload PUEDE ser cualquier tipo de valor. Representa la carga útil de la acción. Cualquier información sobre la acción que no sea el tipo o estado de la acción debe ser parte del payload campo. Por convención, si errores true, payload DEBERÍA ser un objeto de error. Esto es similar a rechazar una promesa con un objeto de error. 

            Definicion de PayloadAction<type>
            PayloadAction se usa para tipar fuertemente
            Los reductores toman el estado de los argumentos (que es el estado actual de la tienda para que podamos manipularlo) y una acción de tipo PayloadAction<type> (tendría carga útil de la llamada a la acción).

            payload es el nombre de los datos que estás enviando a tu tienda para actualizar el reductor correspondiente.
            Todas las acciones generadas deben definirse utilizando el PayloadAction<T>tipo de Redux Toolkit, que toma el tipo del action.payloadcampo como su argumento genérico.

            Definicion de carga util 
            En informática y telecomunicaciones la carga útil (payload en inglés) es el conjunto de datos transmitidos que es en realidad el mensaje enviado. La carga útil excluye las cabeceras o metadatos, que son enviados simplemente para facilitar la entrega del mensaje. El término está tomado prestado del transporte de mercancías, donde carga útil se refiere a la parte de la carga que se utiliza para costear el transporte.
            En Programación: el uso más común del término está en el contexto de los protocolos de mensaje, para diferenciar la sobrecarga del protocolo de los datos reales. Por ejemplo, una respuesta del servicio web JSON podría ser:
            "datos" : { "mensaje" : "¡Hola, mundo!" } 
            La cadena "¡Hola, mundo!" es la carga útil, mientras que el resto es una sobrecarga de protocolo.
            */
        }
      )
      .addCase(getOnlineMovieDataBaseAutoComplete.rejected, (state) => {
        state.isLoadingGetOnlineMovieDataBaseAutoComplete = false;
      })
      .addCase(getOverviewDetails.pending, (state, action) => {
        state.isLoadingOverviewDetails = true;
      })
      .addCase(
        getOverviewDetails.fulfilled,
        (state, action: PayloadAction<ResponseMovies>) => {
          state.overviewDetails = action.payload;
          state.isLoadingOverviewDetails = false;
          state.errorOverviewDetails = null;
        }
      )
      .addCase(getOverviewDetails.rejected, (state, action) => {
        state.isLoadingOverviewDetails = false;
      });
    /* .addCase(getFullCredits.pending, (state, action) => {
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
      }); */
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const {
  /* startFetchMovieRatings,
  successFetchMovieRatings,
  errorFetchMovieRatings,
  startFetchMovieDetails,
  successFetchMovieDetails,
  errorFetchMovieDetails, */
  /* setTitleSearch, */
} = moviesSlice.actions;

/* export const moviesList = (state: StateStorage) => state.movieState.moviesList; */
export const isLoadingGetOnlineMovieDataBaseAutoComplete = (
  state: StateStorage
) => state.moviesState.isLoadingGetOnlineMovieDataBaseAutoComplete;

export default moviesSlice.reducer;
