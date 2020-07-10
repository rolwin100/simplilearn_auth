const mongoose = require('mongoose');
const fs = require('fs');

mongoose.set('useCreateIndex', true);

module.exports = ({ config, logger }) => {
  mongoose.connect(config.dbUrl, { useNewUrlParser: true }).catch((error) => {
    logger.error(error);
    process.exit();
  });

  models = {};
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === 'index.js') return;
    const factory = require(`../models/${file}`);
    const model = factory({ config });
    models[model.modelName] = model;
  });

  return {
    ...models,
    mongoose,
  };
};
