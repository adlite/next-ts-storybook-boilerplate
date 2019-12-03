// Vendor
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// Middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import immutableStateInvariant from 'redux-immutable-state-invariant';
// Internals
import {env} from 'utils';
import reducers from './reducers';

const initializeStore = (initialState = {}) => {
  const middleware = [thunk];

  if (env.isDev()) {
    middleware.push(logger);
    middleware.push(immutableStateInvariant());
  }

  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));
};

export {initializeStore, reducers};
