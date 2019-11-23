/**
 * Stylelint config
 * @see https://stylelint.io/
 * @see https://stylelint.io/user-guide/example-config
 */
module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
  },
};
