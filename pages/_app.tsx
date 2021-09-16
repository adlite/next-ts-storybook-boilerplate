import {AppProps} from 'next/app';

import ExampleLayout from '~/components/ExampleLayout';

import '~/styles/base.scss';

export default function App({Component, pageProps}: AppProps): JSX.Element {
  return (
    <ExampleLayout>
      <Component {...pageProps} />
    </ExampleLayout>
  );
}
