import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from './Store/store';

const container = document.getElementById('root')!;
const root = createRoot(container);
const store = setupStore()
root.render(
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);
