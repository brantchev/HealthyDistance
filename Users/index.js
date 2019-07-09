'use strict'

const mySQL = require('../lib/mysqlConnection/MysqlConnection');

module.exports = function (app) {

    const UserRepository = new (require('./UserRepository'))(mySQL),
        UserController = new (require('./UserController'))(UserRepository, app);

    return require ('./UserRoutes')(UserController);
};