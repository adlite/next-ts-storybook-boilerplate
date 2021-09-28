const {sassSharedData, sassJsonImporter} = require('./webpack/shared');

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
  webpack5: false, // disable Webpack 5 due to node-sass-json-importer incompatibility
};
