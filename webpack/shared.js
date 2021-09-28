const jsonImporter = require('node-sass-json-importer');

/**
 * Aliases for Webpack alias resolver
 */
const aliases = () => ({
  '~': process.cwd(),
});

/**
 * @see https://github.com/sass/node-sass#includepaths
 */
const sassIncludePaths = () => [process.cwd()];

/**
 * @see https://www.npmjs.com/package/node-sass-json-importer
 */
const sassJsonImporter = () => jsonImporter();

/**
 * @param envResources {'next'|'storybook'}
 * @see https://github.com/sass/node-sass#data
 * Resources in 'styles' directory to be allowed in each component
 */
const sassSharedData = envResources => {
  const sharedResources = [
    'styles/config/breakpoints.json',
    'styles/config/colors.json',
    'styles/config/grid.json',
    `styles/resources/${envResources}`,
    'styles/resources/grid',
    'styles/resources/mixins',
    'styles/resources/variables',
  ];

  return sharedResources.map(path => `@import '${path}';`).join('');
};

module.exports = {
  sassIncludePaths,
  sassSharedData,
  sassJsonImporter,
  aliases,
};
