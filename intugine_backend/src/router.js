const bodyParser = require('body-parser');
const express = require('express');
const { partialRight } = require('ramda');

const controller = require('./utils/createController');

const { errorHandler } = require('./utils/errorHandler.js');
const jwt = require('jsonwebtoken');
module.exports = ({ config, logger }) => {
  const router = express.Router();

  /**
   * auth middleware
   */
  var authmiddleware = function(req, res, next) {
    let token = req.headers['authorization'];
    if (!token) {
      return res.status(401).send({ status: 'unauthorized' });
    }

    token = token.split('Bearer')[1].trim();
    let payload;
    try {
      payload = jwt.verify(token, config.appKey);
    } catch (e) {
      console.log(e);
      if (e instanceof jwt.JsonWebTokenError) {
        return res.status(401).send({ status: 'unauthorized' });
      }
      return res.status(400).send({ status: 'unauthorized' });
    }
    next();
  };

  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(bodyParser.json());

  router.use('/', controller('index'));
  router.use('/api/v1/auth', controller('auth'));
  // 404, should be the last route.
  router.get('*', function(req, res) {
    res.status(404).send();
  });

  router.use(partialRight(errorHandler, [logger, config]));
  return router;
};
