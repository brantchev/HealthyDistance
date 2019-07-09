module.exports = (function () {
    const mysql = require('mysql'),
	    dotenv = require('dotenv');
	dotenv.config();
    
	pool = mysql.createPool({
		connectionLimit: 10,
		host: process.env.DB_host,
		port: process.env.DB_port,
		user: process.env.DB_user,
		password: process.env.DB_password,
		database: process.env.DB_database
	});

    pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
        if (err) throw err;

        console.info('Pool connected!');
    });
    return pool;
})();