import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from '../features/slices/moviesSlice';
import moviesReducer from '../features/reducers/movies';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    moviesReducer
  },
});
