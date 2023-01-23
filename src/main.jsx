import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'

import { store } from './app/store';
import { AppRouter } from "./routes/AppRouter.jsx";
import { Counter } from './features/counter/Counter';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
    // <Provider store={store}> 
    <RouterProvider router={AppRouter} />
    // </Provider> 
)
