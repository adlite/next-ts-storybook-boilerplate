// Vendor
import React from 'react';
import PropTypes from 'prop-types';
// Internals
import {initializeStore} from 'store';

// Constants
const IS_SERVER = typeof window === 'undefined';
const NEXT_REDUX_STORE = '__NEXT_REDUX_STORE__';

/**
 * Always make a new store if server, otherwise state is shared between requests.
 * Create store if unavailable on the client and set it on the window object.
 * @param [initialState] {*}
 * @returns {Object}
 */
function getOrCreateStore(initialState) {
  if (IS_SERVER) {
    return initializeStore(initialState);
  }

  if (!window[NEXT_REDUX_STORE]) {
    window[NEXT_REDUX_STORE] = initializeStore(initialState);
  }
  return window[NEXT_REDUX_STORE];
}

export default App => {
  return class AppWithRedux extends React.Component {
    static defaultProps = {
      initialReduxState: {},
    };

    static propTypes = {
      initialReduxState: PropTypes.object,
    };

    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
