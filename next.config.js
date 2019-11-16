// next.config.js
const withSass = require('@zeit/next-sass');

const config = {
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    return config
  },
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[local]_[hash:base64:5]',
    localsConvention: 'camelCaseOnly'
  }
};

module.exports = withSass(config);