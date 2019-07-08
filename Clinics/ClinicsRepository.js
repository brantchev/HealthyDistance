'use strict'

module.exports = function ClinicsRepository(mySQL) {
	
	function checkIfClinicExists(clinicAddr){
        const queryString = "SELECT * FROM healthdb.clinics WHERE clinicAddr=?";
		mySQL().query(queryString, [clinicAddr], (err,rows,fields) => {
			return rows && rows.length > 0;
		});
    }
	
	function addClinic(clinicName, clinicAddr, LatCoords, LonCoords){
		const queryString = "INSERT INTO healthdb.clinics (clinicName, clinicAddr, LatCoords, LonCoords) VALUES (?,?,?,?)";
		mySQL().query(queryString, [clinicName, clinicAddr, LatCoords, LonCoords], (err,rows,fields) => {
			return rows && rows.length > 0;
		});
	}
	
	
	
	
	
	
	
	
	return {
		checkIfClinicExists,
		addClinic,
		
		
	}
	
}