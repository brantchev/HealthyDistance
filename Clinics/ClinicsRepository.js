'use strict'

module.exports = function ClinicsRepository(mySQL) {
	
	function checkIfClinicExists(clinicAddr){
        const queryString = "SELECT * FROM healthdb.clinics WHERE clinicAddr=?";
		mySQL.makeQuery(queryString, [clinicAddr], (result) => {
			return result.affectedRows > 0;
		});
    }
	
	function addClinic(clinicName, clinicAddr, LatCoords, LonCoords){
		const queryString = "INSERT INTO healthdb.clinics (clinicName, clinicAddr, LatCoords, LonCoords) VALUES (?,?,?,?)";
		mySQL.makeQuery(queryString, [clinicName, clinicAddr, LatCoords, LonCoords], (result) => {
			return result && result.length > 0;
		});
	}
	
	function editClinic(id){
		const queryString = "SELECT * FROM healthdb.clinics WHERE id=? LIMIT 1";
    	return mySQL.makeQuery(queryString, [id], (rows) => {
			return rows.length && rows.length > 0 ? rows : null;
		});
	}

	function updateClinic(id, clinicName, clinicAddr, LatCoords, LonCoords){
		const queryString = "UPDATE healthdb.clinics SET clinicName=?, clinicAddr=?, LatCoords=?, LonCoords=? WHERE id=?";
    	return mySQL.makeQuery(queryString, [clinicName, clinicAddr, LatCoords, LonCoords, id], (result) => {
			return result.affectedRows > 0;
		});
	}

	function delClinic(id){
		const queryString = "DELETE FROM healthdb.clinics WHERE id=?";
    	return mySQL.makeQuery(queryString, [id], (result) => {
			return result.affectedRows > 0;
		});
	}

	function clinicsList(){
		const queryString = "SELECT * FROM healthdb.clinics";
    	return mySQL.makeQuery(queryString, null, (rows) => {
			return rows.length && rows.length > 0 ? rows : null;
		  });
	}
	
	return {
		checkIfClinicExists,
		addClinic,
		editClinic,
		updateClinic,
		delClinic,
		clinicsList
	}
	
}