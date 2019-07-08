'use strict'

const mySQL = require(../lib/mySQLconnection);

module.exports = function (app) {

    var ClinicsRepository = new (require('./ClinicsRepository'))(mySQL),
        ClinicsController = new (require('./ClinicsController'))(ClinicsRepository, app);

    return require ('./ClinicsRoutes')(ClinicsController);
};