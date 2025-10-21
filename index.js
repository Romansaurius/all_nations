require('dotenv').config()
const express = require('express')
const mysql = require('mysql2')
const swaggerUI = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')
const apinucci = express()
const apikey = require('./middlewares/apikey')

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Roman Ranucci',
      version: '1.0.0',
      description: 'Documentación de la API'
    },
    servers: [{ url: 'http://localhost:3001' }],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'x-api-key'
        }
      }
    }
  },
  apis: ['./index.js']
}
const swaggerSpec = swaggerJSDoc(swaggerOptions)

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

apinucci.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
apinucci.use(apikey);
  db.connect((error)=>{
    if(error){
        console.log("Error: "+error)
        return;
    }
    console.log('Conexion exitosa');
})

apinucci.get('/', (request,result)=>{
    result.send('Esto es una api con node y express');
});

apinucci.get('/countries', (request,result)=>{
    db.query("SELECT * FROM `countries`",(err,data)=>{
        if(err){
            result.status(500).json({message : err.message});
            return;
        }
        result.json(data);
    })
})

apinucci.get('/continents', (request,result)=>{
    db.query("SELECT * FROM `continents`",(err,data)=>{
        if(err){
            result.status(500).json({message : err.message});
            return;
        }
        result.json(data);
    })
})

apinucci.get('/countryLanguages', (request,result)=>{
    db.query("SELECT * FROM `country_languages`",(err,data)=>{
        if(err){
            result.status(500).json({message : err.message});
            return;
        }

        result.json(data);
    })
})

apinucci.get('/countryStats', (request,result)=>{
    db.query("SELECT * FROM `country_stats`",(err,data)=>{
        if(err){
            result.status(500).json({message : err.message});
            return;
        }
        result.json(data);
    })
})

apinucci.get('/languages', (request,result)=>{
    db.query("SELECT * FROM `languages`",(err,data)=>{
        if(err){
            result.status(500).json({message : err.message});
            return;
        }
        result.json(data);
    })
})


apinucci.get('/regions', (request,result)=>{
    db.query("SELECT * FROM `regions`",(err,data)=>{
        if(err){
            result.status(500).json({message : err.message});
            return;
        }
        result.json(data);
    })
})


apinucci.get('/regionAreas', (request,result)=>{
    db.query("SELECT * FROM `region_areas`",(err,data)=>{
        if(err){
            result.status(500).json({message : err.message});
            return;
        }
        result.json(data);
    })
})



const PORT = process.env.PORT || 3001;
apinucci.listen(PORT, '0.0.0.0', ()=>{
    console.log('Servidor escuchando en el puerto: '+PORT);
})