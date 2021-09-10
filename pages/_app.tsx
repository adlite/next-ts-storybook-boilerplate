import {AppProps as NextAppProps} from 'next/app';
import {Provider} from 'mobx-react';

import ExampleLayout from '@/components/ExampleLayout';
import {withMobXStore} from '@/mobx';

import '@/styles/base.scss';

type AppProps = NextAppProps & {store: any};

function App({Component, pageProps, store}: AppProps) {
  return (
    <Provider store={store}>
      <ExampleLayout>
        <Component {...pageProps} />
      </ExampleLayout>
    </Provider>
  );
}

export default withMobXStore(App);
