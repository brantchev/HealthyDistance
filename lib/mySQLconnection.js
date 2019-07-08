const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_host,
    port: process.env.DB_port,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_database
});

module.exports = connectionPool;