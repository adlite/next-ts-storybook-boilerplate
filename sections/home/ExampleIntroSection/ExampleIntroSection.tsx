import Image from 'next/image';

import style from './style.module.scss';

export default function ExampleIntroSection(): JSX.Element {
  return (
    <div className={style.ExampleIntroSection}>
      <div className={style.container}>
        <Image src="/assets/images/example-intro.png" width={400} height={79} alt="Example icon" />
        <div className={style.linksWrapper}>
          <a href="https://github.com/adlite/next-ts-storybook-boilerplate" rel="noreferrer" target="_blank">
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
