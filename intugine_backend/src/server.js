const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');

module.exports = ({ logger, router, config, auth: { passport } }) => {
  const app = express();

  app.use(cors());
  app.use(helmet());

  app.set('view engine', 'pug');
  app.set('views', path.join(__dirname, '/views'));
  app.use(express.static('public'));

  // passport
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(router);

  const start = () => {
    return new Promise((resolve, reject) => {
      const server = app.listen(config.port, (error) => {
        if (error) reject(error);
        const { port } = server.address();
        logger.info(`🤘 API - Port ${port}`);
        resolve(server);
      });
    });
  };

  return { app, start };
};
