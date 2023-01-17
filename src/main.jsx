import React from 'react'
import { Provider } from 'react-redux';
import { store } from './app/store';
import ReactDOM from 'react-dom/client'
import App from './App'
import { Counter } from './features/counter/Counter';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
