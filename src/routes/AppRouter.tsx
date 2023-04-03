import { createBrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import { Details } from "../pages/Details";
import { Results } from "../pages/Results";
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
    element: <Results isLoadingGetOnlineMovieDataBaseAutoComplete={false} overviewDetails={[]} isLoadingOverviewDetails={false} errorOverviewDetails={null} isLoadingFullCredits={false} errorFullCredits={null} movieId={""} />,
    errorElement: <NotFount />,
  },
  {
    path: "/details/:movieId",
    element: <Details />,
    errorElement: <NotFount />,
  },
]);
