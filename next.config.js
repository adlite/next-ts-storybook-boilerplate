const withSass = require('@zeit/next-sass');

const IS_DEV = process.env.NODE_ENV === 'development';

const config = {
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    return config
  },
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: IS_DEV ? '[local]_[hash:base64:5]' : '_[hash:base64:6]',
  },
  sassLoaderOptions: {}
};

module.exports = withSass(config);