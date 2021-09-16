import ExampleIcon from '~/public/assets/icons/example-icon.svg';
import style from './style.module.scss';

export default function ExampleIntroSection(): JSX.Element {
  return (
    <div className={style.ExampleIntroSection}>
      <div className={style.container}>
        <div>
          <ExampleIcon />
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
