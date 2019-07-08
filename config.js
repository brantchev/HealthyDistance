const config = {
    host: '127.0.0.1',
    port: process.env.PORT || 3003,
    database: {
        host: 'localhost',
        user: 'root',
        password: 'Health-2019',
        database: 'healthdb',
        charset : 'utf8mb4',
        multipleStatements: true,
        acquireTimeout: 30000
		}
	};
module.exports = config;