//EN ESTE ARCHIVO MANEJAMOS LA CONEXION
const sql = require('mssql');
const config = require('../config');

 const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options:{
    encrypt: false,
    instanceName: 'DOCENTE5'
  },
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

module.exports = getConnection;