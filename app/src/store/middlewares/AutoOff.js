/**
 * NPM import
 */

/**
 * Local import
 */
import { TOGGLE_LIGHT, toggleLight } from '../reducer';

/**
 * Code
 */

/**
 * Ce middleware éteint automatiquement une lampe qui reste allumée plus de 5s.
 */
const AutoOff = store => next => (action) => {
  switch (action.type) {
    case TOGGLE_LIGHT: {
      const state = store.getState();
      if (!state.light) {
        // La lampe est éteinte et va s'allumer.
        window.autoOff = window.setTimeout(() => {
          store.dispatch(toggleLight());
        }, 5000);
      }
      else {
        // La lampe est allumée et va s'éteindre.
        /* eslint-disable-next-line no-lonely-if */
        if (window.autoOff) {
          // La lampe est éteinte manuellement, il faut annuler l'autoOff
          // en cours.
          window.clearTimeout(window.autoOff);
        }
      }
      break;
    }

    default:
  }

  // On passe au prochain middleware (ou au reducer).
  next(action);
};

/**
 * Export
 */
export default AutoOff;
