import { createBrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'

import { Home } from "../pages/home";
import { Results } from "../pages/results";
import { Details } from "../pages/details";
import { NotFount } from "../pages";


export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFount />
  },
  {
    path: "/results/:title",
    element: <Results />,
    errorElement: <NotFount />
  },
  {
    path: "/details",
    element: <Details />,
    errorElement: <NotFount />
  },
]);