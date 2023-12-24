const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
  info: {
    title: 'YouTube Subscribers API',
    version: '1.0.0',
    description: 'API documentation for YouTube Subscribers',
  },
  basePath: '/',
};

// Options for the swagger-jsdoc setup
const options = {
  swaggerDefinition,
  apis: ['./src/app.js'], // Path to the API routes file(s)
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Middleware to serve the Swagger UI
const serve = swaggerUI.serve;
const setup = swaggerUI.setup(swaggerSpec);



module.exports = { serve, setup };
