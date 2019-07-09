'use strict'

const mySQL = require('../lib/mysqlConnection/MysqlConnection');

module.exports = function (app) {

    const ClinicsRepository = new (require('./ClinicsRepository'))(mySQL),
        ClinicsController = new (require('./ClinicsController'))(ClinicsRepository, app);

    return require ('./ClinicsRoutes')(ClinicsController);
};