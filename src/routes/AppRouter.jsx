import { createBrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'

import { NotFount, Home, Results, Details } from "../pages";

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