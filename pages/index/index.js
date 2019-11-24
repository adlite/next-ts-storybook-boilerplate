// Vendor
import React from 'react';
// Internals
import Button from 'components/Button';
import Grid from 'components/Grid';
import LoaderIcon from 'assets/icons/loader.svg';
import style from './style.scss';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Button>Click on me</Button>
      <p>APP_MAGIC_API_KEY: {process.env.APP_MAGIC_API_KEY}</p>
      <div className={style.bg} />
      <div className={style.png} />
      <div className={style.gif} />
      <div className={style.svg} />
      <LoaderIcon />
      <Grid />
    </div>
  );
};

export default Home;
