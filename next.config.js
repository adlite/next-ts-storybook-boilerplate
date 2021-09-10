// Internals
const {aliases, sassSharedData, sassJsonImporter, reactSvgLoaderRule, cssoWebpackPlugin} = require('./webpack/shared');

// Next config
module.exports = {
  sassOptions: {
    importer: sassJsonImporter(),
    additionalData: sassSharedData('next'),
  },
  webpack(config, {defaultLoaders}) {
    // React SVG Loader
    config.module.rules.push(reactSvgLoaderRule(defaultLoaders.babel));

    // Aliases for paths to app directories
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases(),
    };

    // CSS optimizations
    if (process.env.NODE_ENV !== 'development') {
      config.plugins.push(cssoWebpackPlugin());
    }

    return config;
  },
};
