const awilix = require('awilix');
const server = require('./server.js');
const config = require('./config/index.js');
const router = require('./router.js');
const db = require('./models/index');
const auth = require('./services/auth.js');

const logger = require('./utils/logger.js');

const { createContainer, asValue, asFunction } = awilix;

const container = createContainer();

// SYSTEM
container.register({
  server: asFunction(server).singleton(),
  logger: asFunction(logger).singleton(),
  router: asFunction(router).singleton(),
  db: asFunction(db).singleton(),
  auth: asFunction(auth).singleton(),
  config: asValue(config),
});

module.exports = container;
