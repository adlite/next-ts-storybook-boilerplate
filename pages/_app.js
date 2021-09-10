import NextApp from 'next/app';
import PropTypes from 'prop-types';
import {Provider} from 'mobx-react';

import ExampleLayout from '@/components/ExampleLayout';
import {withMobXStore} from '@/mobx';

import '@/styles/base.scss';

class App extends NextApp {
  static propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  };

  render() {
    const {Component, pageProps, store} = this.props;

    return (
      <Provider store={store}>
        <ExampleLayout>
          <Component {...pageProps} />
        </ExampleLayout>
      </Provider>
    );
  }
}

export default withMobXStore(App);
