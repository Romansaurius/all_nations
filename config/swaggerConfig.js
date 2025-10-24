const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Roman Ranucci',
      version: '1.0.0',
      description: 'Documentación de la API con Swagger',
      ApiKey: 'RomanRZD9vaQQaL6En7'
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production' 
          ? process.env.RENDER_EXTERNAL_URL || 'https://your-app.onrender.com'
          : `http://localhost:${process.env.PORT || 4000}`,
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'x-api-key'
        }
      }
    },
    security: [
      {
        ApiKeyAuth: []
      }
    ]
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;