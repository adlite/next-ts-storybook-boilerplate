import Image from 'next/image';

import style from './style.module.scss';

export default function ExampleIntroSection(): JSX.Element {
  return (
    <div className={style.ExampleIntroSection}>
      <div className={style.container}>
        <div>
          <Image src="/assets/icons/example-icon.svg" width={121} height={121} alt="Example icon" />
        </div>
        <h1 className={style.title}>Next.js Boilerplate</h1>
        <div className={style.linksWrapper}>
          <a href="https://github.com/adlite/next-js-boiler" rel="noreferrer" target="_blank">
            Boilerplate Docs
          </a>
          <a href="https://nextjs.org/docs/getting-started" rel="noreferrer" target="_blank">
            Next.js Docs
          </a>
          <a href="https://storybook.js.org/docs/react/get-started/introduction" rel="noreferrer" target="_blank">
            Storybook Docs
          </a>
        </div>
      </div>
    </div>
  );
}
