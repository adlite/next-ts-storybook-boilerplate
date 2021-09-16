/**
 * ESLint config
 * @see https://eslint.org/
 * @see https://eslint.org/docs/rules/
 * @see https://nextjs.org/docs/basic-features/eslint
 */
module.exports = {
  plugins: [],
  extends: ['next/core-web-vitals', 'prettier'],
  globals: {
    it: 'readonly',
    expect: 'readonly',
    describe: 'readonly',
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/first': 2,
    'import/exports-last': 0,
    'import/no-duplicates': 2,
    'import/default': 2,
    'import/newline-after-import': 2,
    'import/no-absolute-path': 2,
    'import/no-webpack-loader-syntax': 2,
    'import/no-self-import': 2,
    'import/no-cycle': 2,
    'import/no-useless-path-segments': 2,
    'import/no-deprecated': 2,
    'import/no-mutable-exports': 2,
    'import/max-dependencies': [2, {max: 15}],
    'import/no-extraneous-dependencies': [
      2,
      {devDependencies: false, optionalDependencies: false, peerDependencies: false},
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../*'],
      },
    ],
    'import/order': [
      2,
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
          },
        ],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    eqeqeq: ['error', 'always'],
    camelcase: 'error',
    'no-var': 2,
  },
};
