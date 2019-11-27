module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testMatch: ['./**/*.test.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/assets/',
    '/public/',
    '/shell/',
    '/styles/',
    '/templates/',
    '/vendor/',
  ],
  verbose: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/mocks/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
