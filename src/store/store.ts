import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movies/slices/moviesSlice';
/* import moviesReducer from '../features/reducers/MoviesReducer'; */

export const store = configureStore({
  reducer: {
    moviesState: movieReducer,
    /* El nombre del reducer debe ser el mismo en todo el entorno */
    /* moviesReducer  */
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
