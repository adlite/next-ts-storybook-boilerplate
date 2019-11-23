const path = require('path');
// Next plugins
const withSass = require('@zeit/next-sass');
// Webpack
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const jsonImporter = require('node-sass-json-importer');
// Internals
const scssImportChain = require('./utils/scssImportChain');

const IS_DEV = process.env.NODE_ENV === 'development';

const config = {
  webpack(config) {
    // CSS optimizations
    if (!IS_DEV) {
      config.plugins.push(new CssoWebpackPlugin());
    }
    // Aliases for paths to app directories
    config.resolve.alias = {
      ...config.resolve.alias,
      assets: path.resolve(__dirname, 'assets'),
      classes: path.resolve(__dirname, 'classes'),
      components: path.resolve(__dirname, 'components'),
      hocs: path.resolve(__dirname, 'hocs'),
      sections: path.resolve(__dirname, 'sections'),
      state: path.resolve(__dirname, 'state'),
      styles: path.resolve(__dirname, 'styles'),
      utils: path.resolve(__dirname, 'utils'),
    };
    return config;
  },
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: IS_DEV ? '[local]_[hash:base64:5]' : '_[hash:base64:6]',
  },
  sassLoaderOptions: {
    importer: jsonImporter(),
    data: scssImportChain([
      'styles/config/grid.json',
      'styles/config/breakpoints.json',
      'styles/config/colors.json',
      'styles/preferences/_variables',
      'styles/preferences/_grid',
      'styles/preferences/_mixins',
      'styles/preferences/_easings',
    ]),
    includePaths: [__dirname],
  },
};

module.exports = withSass(config);
