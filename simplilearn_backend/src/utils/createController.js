const path = require('path');

module.exports = function createControllerRoutes(controllerUri) {
  const controllerPath = path.resolve(
    __dirname,
    '../controllers',
    controllerUri,
  );
  const Controller = require(controllerPath);

  return Controller();
};
