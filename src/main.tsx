import { Provider } from 'react-redux';

import ReactDOM from 'react-dom/client';
import { store } from './app/store/store';
import { AppRouter } from './routes/AppRouter.jsx';
/* import { Counter } from "./features/counter/Counter"; */
import { RouterProvider } from 'react-router-dom';
import './App.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={AppRouter} />
  </Provider>
);
