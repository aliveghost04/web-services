'use strict';

module.exports = {
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASS || 'password',
    database: process.env.DB_NAME || 'database',
    connectionLimit: process.env.DB_CONNECTION_LIMIT || 10
  },
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost'
};