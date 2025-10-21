const mysql = require("mysql2");
require('dotenv').config();

const credenciales = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const db = mysql.createPool(credenciales);

module.exports = db.promise();