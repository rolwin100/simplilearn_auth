const express = require('express');
const container = require('../container.js');
const HttpError = require('../utils/HttpError');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = () => {
  const {
    config: { appKey },
    db: { User },
  } = container.cradle;

  const router = express.Router();

  router.post('/login', (req, res, next) => {
    try {
      const { username, password } = req.body;

      User.findOne({ username }, function(err, user) {
        if (err) {
          return res.json(err);
        }
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = jwt.sign({ username }, appKey, {
            algorithm: 'HS256',
            expiresIn: '1h',
          });
          return res.json({
            status: 'success',
            token,
          });
        }

        return res.status(401).json({
          status: 'failure',
          description: 'authentication error',
        });
      });
    } catch (error) {
      return next(new HttpError(error));
    }
  });

  router.post('/signup', (req, res, next) => {
    try {
      const { username, password, email } = req.body;

      bcrypt.hash(password, 2, function(err, hash) {
        let user = new User({
          username,
          password: hash,
          email,
        });

        user.save((err, val) => {
          if (err) {
            res.status(401).json(err);
          } else {
            const token = jwt.sign({ username }, appKey, {
              algorithm: 'HS256',
              expiresIn: '1h',
            });
            return res.json({
              status: 'success',
              token,
            });
          }
        });
      });
    } catch (error) {
      return next(new HttpError(error));
    }
  });

  return router;
};
