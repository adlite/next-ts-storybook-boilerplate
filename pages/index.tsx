import Head from 'next/head';

import ExampleIntroSection from '~/sections/home/ExampleIntroSection';

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>Next.js Boiler | Home</title>
      </Head>
      <ExampleIntroSection />
    </>
  );
}
