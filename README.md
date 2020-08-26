# Next.js 9 boilerplate for big and scalable projects

The cure for headaches in development projects on React + Next.js.

## <a name="inside">What’s Inside?</a>
- [Next.js 9](https://nextjs.org/docs) as a platform
- [SCSS](https://sass-lang.com/documentation)
- [PostCSS Autoprefixer](https://autoprefixer.github.io/) and [CSS Modules](https://github.com/css-modules/css-modules)
- [Susy Grid](https://www.oddbird.net/susy/docs/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/user-guide)
- [Prettier](https://prettier.io/) (doesn't conflict with eslint and stylelint rules)
- [Jest](https://jestjs.io/)
- [Templateman](https://github.com/adlite/templateman)
- Production assets optimization: [CSSO](https://github.com/css/csso), [Imagemin](https://github.com/Klathmon/imagemin-webpack-plugin) and [SVGO](https://github.com/Klathmon/imagemin-webpack-plugin#optionssvgo)
- Webpack [file loaders](https://webpack.js.org/loaders/file-loader/)
- [ES7 decorators support](https://babeljs.io/docs/en/next/babel-plugin-proposal-decorators)
- [Redux](https://redux.js.org/) (with redux-thunk, redux-logger, redux-immutable-state-invariant and redux-devtools-extension based on [Ducks](https://github.com/erikras/ducks-modular-redux) pattern)
- Prepared basic components and HOCs
- Git-hooks with ESLint, Stylelint and Prettier assertions

## <a name="get-started">Getting Started</a>
### Environment
MacOS or Linux is used for development. 
On Windows, all commands should be run in a UNIX-like environment (WSL, Git Bash, or Cygwin).

Prerequisites:
- Node.js v10.x.x+
- Npm v6.x.x+

### Installing dependencies
To initialize project you should install dependencies and copy the sample of env-variables:
1. `npm ci`
2. `cp .env.example .env`

..or just run:
```
bash shell/init.sh
```

### Launch development version
To start the Next development server:
```
npm run dev
```
Then open `http://localhost:3000`.

### Launch production version
1. Build the app using `npm run build`
2. Start the server `npm run start`

### Deploy updates
To deploy new releases on server simply run:
```
bash shell/deploy.sh
```
