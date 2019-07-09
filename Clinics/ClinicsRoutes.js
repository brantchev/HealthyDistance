'use strict'

var router = require('express').Router();

module.exports = function(ClinicsController){
    router.post('/add', ClinicsController.addClinic);
    router.use('/edit/:id', ClinicsController.editClinic);
    // router.post('/edit/:id', ClinicsController.updateClinic);
    router.get('/delete/:id', ClinicsController.deleteClinic);
    router.get('/list', ClinicsController.getClinicsList);

    return router;
};