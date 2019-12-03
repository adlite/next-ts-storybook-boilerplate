// Vendor
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// Middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import immutableStateInvariant from 'redux-immutable-state-invariant';
// Internals
import {env} from 'utils';

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
};

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light,
      });
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1,
      });
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count,
      });
    default:
      return state;
  }
};

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
  return dispatch({type: actionTypes.TICK, light: !isServer, ts: Date.now()});
};

export const startClock = dispatch => {
  return setInterval(() => {
    dispatch({type: actionTypes.TICK, light: true, ts: Date.now()});
  }, 1000);
};

export const incrementCount = () => {
  return {type: actionTypes.INCREMENT};
};

export const decrementCount = () => {
  return {type: actionTypes.DECREMENT};
};

export const resetCount = () => {
  return {type: actionTypes.RESET};
};

export function initializeStore(initialState = exampleInitialState) {
  const middleware = [thunk];

  if (env.isDev()) {
    middleware.push(logger);
    middleware.push(immutableStateInvariant());
  }

  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
}
