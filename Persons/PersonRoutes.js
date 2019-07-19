'use strict'

var router = require('express').Router();

module.exports = function(PersonController){
    router.use('/add', PersonController.addPerson);
    router.use('/edit/:id', PersonController.editPerson);
    // router.post('/edit/:id', PersonController.updatePerson);
    router.get('/delete/:id', PersonController.deletePerson);
    router.get('/list', PersonController.getPersonsList);

    return router;
};