const {resolveServerPath} = require('./utils/helpers');

/**
 * Main configuration for server
 */
module.exports = {
  serverDir: resolveServerPath(),
  port: process.env.PORT || 3000,
  dev: process.env.NODE_ENV === 'development',
  dirsToGenerate: ['/logs'],
  filesToGenerate: [],
  logsDir: '/logs',
};
