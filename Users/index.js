'use strict'

const mySQL = require(../lib/mySQLconnection);

module.exports = function (app) {

    var UserRepository = new(require('./UserRepository'))(mySQL),
        UserController = new (require('./UserController'))(UserRepository, app);

    return require ('./UserRoutes')(UserController);
};