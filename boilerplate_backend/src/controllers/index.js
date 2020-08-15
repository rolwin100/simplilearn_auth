const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const container = require('../container.js');

module.exports = () => {
  const {
    config,
    auth: { requireApiKey },
  } = container.cradle;

  const router = express.Router();

  // swagger specs definition
  const swaggerDefinition = {
    info: {
      title: 'test API Explorer',
      version: '1.0.0',
      description: 'Available REST Endpoints',
    },
    host: config.APP_HOST,
    basePath: `/api/v1`,
    securityDefinitions: {
      ApiKey: {
        description: '',
        type: 'apiKey',
        name: 'Api-Key',
        in: 'header',
      },
    },
  };
  // initialize swagger-jsdoc
  const swaggerSpec = swaggerJSDoc({
    swaggerDefinition,
    apis: ['src/router.js', 'src/controllers/**/*.js'],
  });

  /**
   * @swagger
   * definitions:
   *   Error:
   *     properties:
   *       status:
   *         type: string
   *       statusCode:
   *         type: number
   *         example: 500
   *       message:
   *         type: string
   *       errors:
   *         type: object
   */
  /**
   * @swagger
   * responses:
   *   Unauthorized:
   *     description: Unauthorized
   *     schema:
   *       $ref: '#/definitions/Error'
   *   BadRequest:
   *     description: BadRequest / Invalid Input
   *     schema:
   *       $ref: '#/definitions/Error'
   *   NotFound:
   *     description: Not Found
   *     schema:
   *       $ref: '#/definitions/Error'
   */
  router.get('/docs/swagger.json', (req, res) => {
    res.status(200).json(swaggerSpec);
  });

  router.get('/', (req, res) => {
    return res.redirect('/health');
  });
  router.get('/health', (req, res) => {
    res.send({ status: 'up' });
  });

  return router;
};
