const {aliases, sassSharedData, reactSvgLoaderRule, cssoWebpackPlugin, sassJsonImporter} = require('./webpack/shared');

/**
 * Next.js main config
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    importer: sassJsonImporter(),
    additionalData: sassSharedData('next'),
  },
  webpack5: false,
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
