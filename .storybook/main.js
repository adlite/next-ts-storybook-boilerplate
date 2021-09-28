const {sassJsonImporter} = require('../webpack/shared');

const {aliases, sassSharedData, sassIncludePaths} = require('../webpack/shared');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-links',
    },
    {
      name: '@storybook/addon-essentials',
    },
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          additionalData: sassSharedData('storybook'),
          sassOptions: {
            includePaths: sassIncludePaths(),
            importer: sassJsonImporter(),
          },
        },
      },
    },
  ],
  webpackFinal: async config => {
    // Aliases for paths to app directories
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases(),
    };

    // Return the altered config
    return config;
  },
};
