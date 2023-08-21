import { createSlice } from '@reduxjs/toolkit';
import {
  getDetailsMovie,
  getDiscoverMovies,
  getResultsSearchesMovies,
} from '../actions/online-movie-database/online-movie-database.actions';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { StateStorage } from '../../../models/StateStorage';
import type {
  MoviesState /* este es el nombre del reducer */,
  ResultListDiscoverData,
  ResultMovieDetailsData,
} from '../../../models/moviesInterface';

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
      /* .addCase(getOnlineMovieDataBaseAutoComplete.pending, (state) => {
        state.isLoadingGetOnlineMovieDataBaseAutoComplete = true;
      }) */
      /* .addCase(getOnlineMovieDataBaseAutoComplete.fulfilled, (state, action: PayloadAction<MoviesListData[]>) => {
        state.isLoadingGetOnlineMovieDataBaseAutoComplete = false;
         state.moviesList = action.payload; 
        state.moviesList = action.payload; 
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
            
      }) */
      /* .addCase(getOnlineMovieDataBaseAutoComplete.rejected, (state) => {
        state.isLoadingGetOnlineMovieDataBaseAutoComplete = false;
      }) */
      /* .addCase(getOverviewDetails.pending, (state, action) => {
        state.isLoadingOverviewDetails = true;
      })
      .addCase(getOverviewDetails.fulfilled, (state, action: PayloadAction<ResponseMovies>) => {
        state.overviewDetails = action.payload;
        state.isLoadingOverviewDetails = false;
        state.errorOverviewDetails = null;
      })
      .addCase(getOverviewDetails.rejected, (state, action) => {
        state.isLoadingOverviewDetails = false;
      })
      .addCase(getFullCredits.pending, (state, action) => {
        state.isLoadingFullCredits = true;
      })
      .addCase(getFullCredits.fulfilled, (state, action: PayloadAction<FullCredits>) => {
        state.fullCredits = action.payload;
        state.isLoadingFullCredits = false;
        state.errorFullCredits = null;
      })
      .addCase(getFullCredits.rejected, (state, action) => {
        state.isLoadingFullCredits = false;
      }) */

      /* Peticiones de la nueva api */

      /* .addCase(getTrendingMoviesDay.pending, (state, action) => {
        state.isLoadingMoviesTrendingDay = true;
      })
      .addCase(getTrendingMoviesDay.fulfilled, (state, action: PayloadAction<ResultListTrendingData>) => {
        state.moviesTrendingDay = action.payload;
        state.isLoadingMoviesTrendingDay = false;
        state.errorMoviesTrendingDay = null;
      })
      .addCase(getTrendingMoviesDay.rejected, (state, action) => {
        state.isLoadingMoviesTrendingDay = false;
      }) 
      .addCase(getCreditsMovie.pending, (state, action) => {
        state.isLoadingMovieCredits = true;
      })
      .addCase(getCreditsMovie.fulfilled, (state, action: PayloadAction<any>) => {
        state.movieCredits = action.payload;
        state.isLoadingMovieCredits = false;
        state.errorMovieCredits = null;
      })
      .addCase(getCreditsMovie.rejected, (state, action) => {
        state.isLoadingMovieCredits = false;
      });
      */

      /* Peticiones de nueva api */

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
