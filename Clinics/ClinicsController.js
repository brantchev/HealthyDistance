'use strict'

var async = require('async');

module.exports = function ClinicsController(ClinicsRepository, app) {

   async function addClinic(req, res){
   
//   req.body.clinicName, req.body.clinicAddr, req.body.LatCoords, req.body.LonCoords
   
		if (!req.body.clinicAddr || !req.body.LatCoords || !req.body.LonCoords) {
           res.status(400).json({
               success: false,
               msg: "No coordinates provided"
           });
           return;
		}

		try {
			const isExisting = await ClinicsRepository.checkIfClinicExists(req.body.clinicAddr);

			if (isExisting === true) {
               res.status(400).json({
                   success: false,
                   msg: "This Clinic is already added to the database."
               });
			} else {
				let clinic = await ClinicsRepository.addClinic({
                   req.body.clinicName,
				   req.body.clinicAddr,
				   req.body.LatCoords,
				   req.body.LonCoords
				});
				
				res.redirect('/clinics?action=added');

//				  res.json({
//                    success: true,
//                    clinic: clinic
//                });
			}

		} catch(err) {
			catchError(res, err, '---Add Clinic---')
		}
   }
   
   async function editClinic(req, res){
   
   }
   
   async function updateClinic(req, res){
   
   }
   
   async function deleteClinic(req, res){
   
   }
   
   async function getClinicsList(req, res){
   
   }
   
   return {
	   addClinic,
	   editClinic,
	   updateClinic,
	   deleteClinic,
	   getClinicsList
   };
};
   
   