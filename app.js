const express = require("express");
require('dotenv').config();
const apiKeyAuth = require('./middlewares/apikey')
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./config/swaggerConfig');
const continentRoutes = require('./routes/continentRoutes')
const countryRoutes = require('./routes/countriesRoutes');
const countryLanguagesRoutes = require('./routes/country_languagesRoutes');
const countryStatsRoutes = require('./routes/country_statsRoutes');
const languagesRoutes = require('./routes/languagesRoutes');
const regionsRoutes = require('./routes/regionsRoutes');
const regionAreasRoutes = require('./routes/region_areasRoutes');

const api = express();
api.use(express.json());

// Ruta de bienvenida sin autenticación
api.get('/', (req, res) => {
    res.json({
        message: 'API de Countries funcionando correctamente',
        documentation: '/api-docs',
        note: 'Usa el header x-api-key para acceder a los endpoints'
    });
});

api.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

api.use('/api/continent', apiKeyAuth, continentRoutes)
api.use('/api/country', apiKeyAuth, countryRoutes);
api.use('/api/country_languages', apiKeyAuth, countryLanguagesRoutes);
api.use('/api/country_stats', apiKeyAuth, countryStatsRoutes);
api.use('/api/languages', apiKeyAuth, languagesRoutes);
api.use('/api/regions', apiKeyAuth, regionsRoutes);
api.use('/api/region_areas', apiKeyAuth, regionAreasRoutes);


module.exports = api;