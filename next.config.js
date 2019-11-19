// Next plugins
const withSass = require('@zeit/next-sass');
// Webpack
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const jsonImporter = require('node-sass-json-importer');

const IS_DEV = process.env.NODE_ENV === 'development';

const config = {
  webpack(config) {
    if (!IS_DEV) {
      config.plugins.push(new CssoWebpackPlugin());
    }
    return config;
  },
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: IS_DEV ? '[local]_[hash:base64:5]' : '_[hash:base64:6]',
  },
  sassLoaderOptions: {
    importer: jsonImporter(),
  }
};

module.exports = withSass(config);
