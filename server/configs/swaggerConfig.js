const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Rechhub API",
      version: "1.0.0",
      description: "API documentation",
    },
    components: {
      securitySchemes: {
        CookieAuth: {
          type: "apiKey",
          in:"cookie",
          name: "token",
        },
      },
    },
    security: [{ CookieAuth: [] }],
  },
  apis: ["./controllers/*.js"],
};

module.exports = swaggerJsdoc(options);
