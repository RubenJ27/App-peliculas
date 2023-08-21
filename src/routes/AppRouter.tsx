import { createBrowserRouter } from 'react-router-dom';

import { Details } from '../pages/Details/Details';
import { Home } from '../pages/Home';
import { NotFount } from '../pages/NotFount';
import { Results } from '../pages/Results/Results';

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
