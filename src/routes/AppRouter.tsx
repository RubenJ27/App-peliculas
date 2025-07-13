import { createBrowserRouter } from 'react-router-dom';

import { Details, Home, NotFount, Results } from '../features/movies';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFount />,
  },
  {
    path: '/results/:title',
    element: <Results />,
    errorElement: <NotFount />,
  },
  {
    path: '/movies/:movieId',
    element: <Details />,
    errorElement: <NotFount />,
  },
]);
