const {createLogger, format, transports} = require('winston');
const {logsDir, dev} = require('../config');
const {resolveServerPath} = require('./helpers');

const {combine, timestamp, printf} = format;
const {File, Console} = transports;

const logFormat = printf(({level, message, timestamp}) => {
  return `${timestamp} [${level}]:` + '\n' + message + '\n';
});

const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), logFormat),
  transports: [
    new File({filename: resolveServerPath(`${logsDir}/errors.log`), level: 'error'}),
    new File({filename: resolveServerPath(`${logsDir}/info.log`)}),
  ],
});

// If we're not in production then log to the `console`
if (dev) {
  logger.add(new Console());
}

module.exports = {logger};
