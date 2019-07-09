'use strict'

const async = require('async');

module.exports = function ClinicsController(ClinicsRepository, app) {

   async function addClinic(req, res){
		if (!req.body.clinicAddr || !req.body.LatCoords || !req.body.LonCoords) {
           res.status(400).json({
               success: false,
               msg: "No coordinates provided"
           });
           return;
		}
		try {
			const isExisting = await ClinicsRepository.checkIfClinicExists(req.body.clinicAddr);
            console.log(isExisting);
			if (isExisting === true) {
                res.redirect(302,'/clinics/list?action=existing');
			} else {
				let clinic = await ClinicsRepository.addClinic(
                   req.body.clinicName,
				   req.body.clinicAddr,
				   req.body.LatCoords,
				   req.body.LonCoords
                );
                try {
                    let list = await ClinicsRepository.clinicsList();
                    //res.json(list);
                    res.render('clinics', {clinics: list, added: true});
                } catch(err) {
                    console.log(err);
                    catchError(res, err, '---Get Clinics---')
                }
                
			}

		} catch(err) {
			catchError(res, err, '---Add Clinic---');
		}
   }
   
   async function editClinic(req, res){
       if (req.method == "POST"){
            try {
                let update = await ClinicsRepository.updateClinic(req.params.id,
                                                                req.body.clinicName,
                                                                req.body.clinicAddr,
                                                                req.body.LatCoords,
                                                                req.body.LonCoords);
                console.log(update);
                res.redirect('/clinics/list?action=updated');
            } catch(err) {
                console.log(err);
                catchError(res, err, '---Update Clinic---')
            }
       } else {
           try {
                let edit = await ClinicsRepository.editClinic(req.params.id);
                res.render('clinicEdit', {clinic: edit});
            } catch(err) {
                console.log(err);
                catchError(res, err, '---Edit Clinic---')
            }
       }
   
   }
   
   async function deleteClinic(req, res){
        try {
            let del = await ClinicsRepository.delClinic(req.params.id);
            console.log(del);
            res.redirect('/clinics/list');
        } catch(err) {
            console.log(err);
            catchError(res, err, '---Delete Clinic---')
        }
   }
   
   async function getClinicsList(req, res){
        try {
            let list = await ClinicsRepository.clinicsList();
            //res.json(list);
            res.render('clinics', {clinics: list});
        } catch(err) {
            console.log(err);
            catchError(res, err, '---Get Clinics---')
        }
   }
   
   return {
	   addClinic,
	   editClinic,
	   deleteClinic,
	   getClinicsList
   };
};
   
   