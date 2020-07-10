const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { HeaderAPIKeyStrategy } = require('passport-headerapikey');
const bcrypt = require('bcrypt');
const HttpError = require('../utils/HttpError');

module.exports = ({ db, config }) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    // Temp to avoid errors as no auth is setup yet
    if (!db.User) return done(null, null);
    db.User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(
    new LocalStrategy({ usernameField: 'email' }, function(
      email,
      password,
      done,
    ) {
      db.User.findOne({ email }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (user && bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        }
        return done(null, false, { message: 'Incorrect username/password' });
      });
    }),
  );

  passport.use(
    new HeaderAPIKeyStrategy({ header: 'Api-Key', prefix: '' }, false, function(
      apiKey,
      done,
    ) {
      db.ApiKey.findOne({ apiKey: apiKey }, function(err, key) {
        if (err) return done(err, null);
        if (!key) return done(new HttpError('Invalid api key', 401), null);
        return done(null, key);
      });
    }),
  );

  const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    return res.status(403);
  };

  const isGuest = (req, res, next) => {
    if (!req.isAuthenticated()) return next();
    return res.status(403);
  };

  /**
   * Middleware for authenticating request via api key.
   * Header Api-Key should be present to pass
   */
  const requireApiKey = (req, res, next) => {
    passport.authenticate('headerapikey', (err, key, info) => {
      if (err) return next(err);
      if (!key) return next(new HttpError(info.message, 401));
      return next();
    })(req, res, next);
  };

  return {
    passport,
    isAuthenticated,
    isGuest,
    requireApiKey,
  };
};
