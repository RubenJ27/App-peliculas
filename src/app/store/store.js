import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from '../features/slices/moviesSlice';
/* import moviesReducer from '../features/reducers/MoviesReducer'; */

export const store = configureStore({
  reducer: {
    moviesSlice/* ,
    moviesReducer */
  },
});
