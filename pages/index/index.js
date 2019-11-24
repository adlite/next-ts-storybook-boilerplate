// Vendor
import React from 'react';
// Internals
import Button from 'components/Button';
import Grid from 'components/Grid';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Button>Click me!</Button>
      <p>APP_MAGIC_API_KEY: {process.env.APP_MAGIC_API_KEY}</p>
      <Grid />
    </div>
  );
};

export default Home;
