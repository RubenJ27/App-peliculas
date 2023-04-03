import { createBrowserRouter, Routes, Route } from "react-router-dom";

import { Details } from "../pages/Details/Details";
import { Results } from "../pages/Results/Results";
import { Home } from "../pages/Home";
import { NotFount } from "../pages/NotFount";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFount />,
  },
  {
    path: "/results/:title",
    element: <Results />,
    errorElement: <NotFount />,
  },
  {
    path: "/details/:movieId",
    element: <Details />,
    errorElement: <NotFount />,
  },
]);
