'use strict'

const mySQL = require('../lib/mysqlConnection/MysqlConnection');

module.exports = function (app) {

    const PersonRepository = new (require('./PersonRepository'))(mySQL),
        PersonController = new (require('./PersonController'))(PersonRepository, app);

    return require ('./PersonRoutes')(PersonController);
};