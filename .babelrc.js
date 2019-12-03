/**
 * Babel config extended from Next babel preset
 * @see https://nextjs.org/docs#customizing-babel-config
 * @see https://babeljs.io/docs/en/
 */
module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
};
