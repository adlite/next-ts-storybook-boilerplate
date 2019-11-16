const withStylus = require('@zeit/next-stylus');
const withCSS = require('@zeit/next-css');

const config = {
  cssModules: true
};

module.exports = withCSS(withStylus(config));