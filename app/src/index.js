/**
 * NPM import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';

import store from 'src/store';

/**
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  // Composant racine
  const rootComponent = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  // Noeud du DOM
  const node = document.getElementById('root');
  // Rendu
  render(rootComponent, node);
});

/**
 * Export
 */
