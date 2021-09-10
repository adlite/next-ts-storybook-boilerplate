import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import {getSnapshot} from 'mobx-state-tree';

import {getOrCreateStore} from '@/mobx/utils/store';

/**
 * Higher Order Component that provides a flexible way to bind MobX State Tree with Next.js and helps save state between pages.
 */
export function withMobXStore(App) {
  return class AppWithMobX extends React.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const store = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      appContext.ctx.store = store;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialMobXState: getSnapshot(store),
      };
    }

    static defaultProps = {
      initialMobXState: {},
    };

    static propTypes = {
      initialMobXState: PropTypes.object,
    };

    constructor(props) {
      super(props);
      this.store = getOrCreateStore(props.initialMobXState);
    }

    render() {
      return <App {...this.props} store={this.store} />;
    }
  };
}

/**
 * Injects MobX to component in a simple way
 * @param component {React.ComponentType}
 * @param stores {string|function}
 * @return {React.ComponentType}
 */
export function connectMobX(component, stores = null) {
  return inject(stores || 'store')(observer(component));
}
