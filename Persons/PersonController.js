'use strict'

const async = require('async');

module.exports = function PersonController(PersonRepository, app) {

   async function addPerson(req, res){
		if (!req.body.personAddr || !req.body.LatCoords || !req.body.LonCoords) {
           res.status(400).json({
               success: false,
               msg: "No coordinates provided"
           });
           return;
		}
		try {
			const isExisting = await PersonRepository.checkIfPersonExists(req.body.personAddr);
            console.log(isExisting);
			if (isExisting === true) {
                res.redirect(302,'/people/list?action=existing');
			} else {
				let person = await PersonRepository.addPerson(
                    req.body.personName,
                    req.body.personAddr,
                    req.body.LatCoords,
                    req.body.LonCoords
                );                
                res.redirect('/people/list?action=add');
			}

		} catch(err) {
			catchError(res, err, '---Add Person---');
		}
   }
   
   async function editPerson(req, res){
       if (req.method == "POST"){
            try {
                let update = await PersonRepository.updatePerson(req.params.id,
                                                                req.body.personName,
                                                                req.body.personAddr,
                                                                req.body.LatCoords,
                                                                req.body.LonCoords);
                console.log(update);
                res.redirect('/people/list?action=updated');
            } catch(err) {
                console.log(err);
                catchError(res, err, '---Update Person---')
            }
       } else {
            try {
                let edit = await PersonRepository.editPerson(req.params.id);
                res.render('personEdit', {person: edit});
            } catch(err) {
                console.log(err);
                catchError(res, err, '---Edit Person---')
            }
       }
   
   }
   
   async function deletePerson(req, res){
        try {
            let del = await PersonRepository.delPerson(req.params.id);
            console.log(del);
            res.redirect('/people/list');
        } catch(err) {
            console.log(err);
            catchError(res, err, '---Delete Person---')
        }
   }
   
   async function getPersonsList(req, res){
        try {
            let list = await PersonRepository.personsList();
            //res.json(list);
            res.render('persons', {persons: list});
        } catch(err) {
            console.log(err);
            catchError(res, err, '---Get Persons---')
        }
   }
   
   return {
	   addPerson,
	   editPerson,
	   deletePerson,
	   getPersonsList
   };
};
   
   