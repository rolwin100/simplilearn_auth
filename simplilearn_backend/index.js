const container = require('./src/container.js');
const server = container.resolve('server');
const logger = container.resolve('logger');

server.start().catch((error) => {
  logger.error(error.stack);
  process.exit();
});
