/**
 * InitialState
 */
const initialState = {
  name: 'NoName',
  light: false,
  lastDuration: null, // milliseconds
};

/**
 * Reducer
 */
export const TOGGLE_LIGHT = 'TOGGLE_LIGHT';
export const CHANGE_NAME = 'CHANGE_NAME';
export const TRACK_LAST_DURATION = 'TRACK_LAST_DURATION';

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LIGHT:
      return {
        ...state,
        light: !state.light,
      };

    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      };

    case TRACK_LAST_DURATION:
      return {
        ...state,
        lastDuration: action.duration,
      };

    default:
      return state;
  }
};


/**
 * actionCreators
 */
export const toggleLight = () => ({
  type: TOGGLE_LIGHT,
});

export const changeName = name => ({
  type: CHANGE_NAME,
  name,
});

export const trackLastDuration = duration => ({
  type: TRACK_LAST_DURATION,
  duration,
});

/**
 * Export
 */
export default reducer;
