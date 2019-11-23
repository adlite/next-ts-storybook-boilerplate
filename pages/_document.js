// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
// Vendor
import React from 'react';
import NextDocument, {Html, Head, Main, NextScript} from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
