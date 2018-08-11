/**
 * NPM import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * Local import
 */
import reducer from './reducer';
import TrackUsage from './middlewares/TrackUsage';
import AutoOff from './middlewares/AutoOff';

/**
 * Code
 */

// DevTools - optionnels
const devTools = [];
if (window.devToolsExtension) {
  // On configure l'extension Redux pour Chrome/Firefox.
  devTools.push(window.devToolsExtension());
}

// Middlewares - optionnels
const TrackUsageMW = applyMiddleware(TrackUsage);
const AutoOffMW = applyMiddleware(AutoOff);

// On prépare tous les enhancers pour notre Store.
// Attention : l'ordre a une importance !
const enhancers = compose(AutoOffMW, TrackUsageMW, ...devTools);

const store = createStore(reducer, enhancers);

/**
 * Export
 */
export default store;
