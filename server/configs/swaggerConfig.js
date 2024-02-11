const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Reachhub',
      version: '1.0.0',
      description: 'Test all endpoints of Reachhub',
    },
    basePath: '/',
  },
  apis: ['./controllers/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
