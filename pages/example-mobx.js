import Head from 'next/head';

import ExamplePostsSection from '@/sections/example-mobx/ExamplePostsSection';
import ExampleCommentsSection from '@/sections/example-mobx/ExampleCommentsSection';

function ExampleMobX() {
  return (
    <>
      <Head>
        <title>Next.js Boiler | MobX Example</title>
      </Head>
      <ExamplePostsSection />
      <ExampleCommentsSection />
    </>
  );
}

ExampleMobX.getInitialProps = async ({store}) => {
  await Promise.all([store.postsStore.fetchDataIfNeeded(), store.commentsStore.fetchDataIfNeeded()]);
  return {};
};

export default ExampleMobX;
