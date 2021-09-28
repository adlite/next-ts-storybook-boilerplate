# Next.js boilerplate with TypeScript and Storybook integration

![Intro image](./public/assets/images/example-intro.png)

## What’s Inside?

- [Next.js 11](https://nextjs.org/)
- [Storybook 6](https://storybook.js.org/) integrated with Next.js
- [SCSS](https://sass-lang.com/documentation) globally available variables and mixins
- [SCSS variable imports](https://github.com/pmowrer/node-sass-json-importer) from JSON files
- [ESLint](https://eslint.org/) with predefined rules
- [Stylelint](https://stylelint.io/user-guide) with [SCSS](https://www.npmjs.com/package/stylelint-scss) and [Prettier](https://www.npmjs.com/package/stylelint-prettier) integration
- [Prettier](https://prettier.io/) (does not conflict with eslint and stylelint rules)
- [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) pre-commit hooks
- [Templateman](https://github.com/adlite/templateman) for fast components creation
- Prepared GitHub Actions and Gitlab CI/CD configurations
- Prepared example components and directory structure

## Environment

- Node v14.x.x+
- Npm v6.x.x+

## Installing dependencies

To initialize project you should install dependencies from `package-lock.json` file via:

```
npm ci
```

## Launch development version

To start Next development server:

```
npm run app:dev
```

Then open `http://localhost:3000`.

## Launch Storybook development version

To start Storybook development server:

```
npm run storybook:dev
```

Then open `http://localhost:3001`.

## Launch both

To start Next.js and Storybook in parallel:

```
npm run dev
```

## Linters

You can inspect all you code in parallel running:

```
npm run linters:inspect
```

If it's possible you can inspect and autofix issues by linters running:

```
npm run linters:fix
```
