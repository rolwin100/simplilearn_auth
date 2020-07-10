const log4js = require('log4js');

module.exports = () => {
  const logger = log4js.getLogger();
  logger.level = process.env.LOG_LEVEL || 'ALL';
  return logger;
};
