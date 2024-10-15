import { Provider } from 'react-redux';

import ReactDOM from 'react-dom/client';
import { AppRouter } from './routes/AppRouter.jsx';
import { store } from './store/store';
/* import { Counter } from "./features/counter/Counter"; */
import { RouterProvider } from 'react-router-dom';
import './App.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={AppRouter} />
  </Provider>
);
