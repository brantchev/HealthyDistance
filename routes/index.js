const router = require('express').Router(),
    path = require('path'),
    pathServer = path.join(__dirname, '../');

module.exports = function (app) {

    app.use('/', router);

    //MODULES 

    const clinics = require(pathServer + 'Clinics')();
    router.use('/clinics', clinics);

    // const users = require(pathServer + 'Users')(app);
    // router.use('/users', users);


    return router;
};
