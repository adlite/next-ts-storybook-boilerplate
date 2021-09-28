# Next.js boilerplate for big and scalable projects

The cure for headaches in development projects on Next.js.

## <a name="inside">What’s Inside?</a>

- [Next.js 11](https://nextjs.org/) as a framework
- [Storybook 6](https://storybook.js.org/) for developing UI components in isolation (configuration does not conflict with Next.js)
- [SCSS](https://sass-lang.com/documentation) with [CSS Modules](https://github.com/css-modules/css-modules)
- [ESLint](https://eslint.org/) with [import](https://www.npmjs.com/package/eslint-plugin-import) and [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-import) plugins
- [Stylelint](https://stylelint.io/user-guide) with [SCSS](https://www.npmjs.com/package/stylelint-scss) and [Prettier](https://www.npmjs.com/package/stylelint-prettier) integration
- [Prettier](https://prettier.io/) (does not conflict with eslint and stylelint rules)
- [Templateman](https://github.com/adlite/templateman) for fast components creation
- Production assets optimization: [CSSO](https://github.com/css/csso) and [SVGO](https://github.com/Klathmon/imagemin-webpack-plugin#optionssvgo)
- Webpack [react-svg-loader](https://github.com/boopathi/react-svg-loader)
- Prepared basic Gitlab CI/CD configuration
- Prepared example components and files structure

## <a name="get-started">Getting Started</a>

### Environment

Prerequisites:

- Node.js v12.x.x+
- Npm v6.x.x+

### Installing dependencies

To initialize project you should install dependencies from `package-lock.json` file via:

```
npm ci
```

### Launch development version

To start Next development server:

```
npm run app:dev
```

Then open `http://localhost:3000`.

### Launch Storybook development version

To start Storybook development server:

```
npm run storybook:dev
```

Then open `http://localhost:3001`.

### Launch both

To start Next.js and Storybook in parallel:

```
npm run dev
```

### Linters

You can inspect all you code in parallel running:

```
npm run linters:inspect
```

If it's possible you can inspect and autofix issues by linters running:

```
npm run linters:fix
```
