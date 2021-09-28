import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#E1EBF3" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
