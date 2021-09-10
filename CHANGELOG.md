
# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.0] - 2021-04-13

### Added
- [Next.js 10](https://nextjs.org/) as a framework
- [Storybook](https://storybook.js.org/) for developing UI components in isolation (configuration does not conflict with Next.js)
- [MobX](https://mobx.js.org/) and [MobX State Tree](https://mobx-state-tree.js.org/) for application state management
- [SCSS](https://sass-lang.com/documentation) with [CSS Modules](https://github.com/css-modules/css-modules)
- [ESLint](https://eslint.org/) with [import](https://www.npmjs.com/package/eslint-plugin-import) and [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-import) plugins
- [Stylelint](https://stylelint.io/user-guide) with [SCSS](https://www.npmjs.com/package/stylelint-scss) and [Prettier](https://www.npmjs.com/package/stylelint-prettier) integration
- [Prettier](https://prettier.io/) (does not conflict with eslint and stylelint rules)
- [Templateman](https://github.com/adlite/templateman) for fast components creation
- Production assets optimization: [CSSO](https://github.com/css/csso) and [SVGO](https://github.com/Klathmon/imagemin-webpack-plugin#optionssvgo)
- Webpack [react-svg-loader](https://github.com/boopathi/react-svg-loader)
- Prepared basic Gitlab CI/CD configuration
- Prepared example components and files structure
