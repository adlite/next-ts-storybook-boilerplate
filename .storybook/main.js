const {sassJsonImporter} = require('../webpack/shared');

const {
  aliases,
  sassSharedData,
  sassIncludePaths,
  reactSvgLoaderRule,
  cssoWebpackPlugin,
  svgExcludeRuleFromStorybookLoaders,
} = require('../webpack/shared');

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
  webpackFinal: async (config, ctx) => {
    const {configType} = ctx;
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Exclude SVG from Storybook file-loader
    config.module.rules = svgExcludeRuleFromStorybookLoaders(config.module.rules);

    // React SVG Loader
    config.module.rules.push(reactSvgLoaderRule('babel-loader'));

    // Aliases for paths to app directories
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases(),
    };

    // CSS optimizations
    if (configType !== 'DEVELOPMENT') {
      config.plugins.push(cssoWebpackPlugin());
    }

    // Return the altered config
    return config;
  },
};
