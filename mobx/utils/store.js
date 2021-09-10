import {applySnapshot, onSnapshot} from 'mobx-state-tree';

import {model as RootStore, initialState as rootStoreInitialState} from '@/mobx/stores/RootStore';
import {isClient, isDev, isServer} from '@/utils/env';

/**
 * Initializes store and applies snapshot if it exists
 * @param [snapshot] {Object}
 * @return {Proxy}
 */
export function initStore(snapshot = null) {
  const store = RootStore.create(rootStoreInitialState);

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (snapshot) {
    applySnapshot(store, snapshot);
  }

  // Logging in dev mode
  if (isClient && isDev) {
    onSnapshot(store, newSnapshot => {
      console.info('MobX state has changed:', newSnapshot);
    });
  }

  return store;
}

/**
 * Always make a new store if it invokes server, otherwise state is shared between requests.
 * Create store if unavailable on the client and set it on the window object.
 * @param [initialState] {Object|undefined}
 * @returns {Proxy}
 */
export function getOrCreateStore(initialState) {
  // Name of window global variable
  const NEXT_MOBX_STORE = '__NEXT_MOBX_STORE__';

  if (isServer) {
    return initStore(initialState);
  }

  if (!window[NEXT_MOBX_STORE]) {
    window[NEXT_MOBX_STORE] = initStore(initialState);
  }

  return window[NEXT_MOBX_STORE];
}
