import React from 'react';
import ReactDOM from 'react-dom/client';  // Nota l'import da 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Usa createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

