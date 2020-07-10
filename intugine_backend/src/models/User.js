const mongoose = require('mongoose');

module.exports = () => {
  const user = new mongoose.Schema({
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
  });

  const User = mongoose.model('User', user);

  return User;
};
