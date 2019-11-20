// Vendor
import React from 'react';
import NextApp from 'next/app';
// Internals
import '../styles/vendor/normalize.scss';
import '../styles/vendor/reset.scss';
import '../styles/index.scss';

class App extends NextApp {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const {Component, pageProps} = this.props;
    return <Component {...pageProps} />;
  }
}

export default App;
