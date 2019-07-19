'use strict'

module.exports = function PersonRepository(mySQL) {
	
	function checkIfPersonExists(personAddr){
        const queryString = "SELECT * FROM healthdb.persons WHERE personAddr=?";
		mySQL.makeQuery(queryString, [personAddr], (result) => {
			return result.affectedRows > 0;
		});
    }
	
	function addPerson(personName, personAddr, LatCoords, LonCoords){
		const queryString = "INSERT INTO healthdb.persons (personName, personAddr, LatCoords, LonCoords) VALUES (?,?,?,?)";
		mySQL.makeQuery(queryString, [personName, personAddr, LatCoords, LonCoords], (result) => {
			return result && result.length > 0;
		});
	}
	
	function editPerson(id){
		const queryString = "SELECT * FROM healthdb.persons WHERE id=? LIMIT 1";
    	return mySQL.makeQuery(queryString, [id], (rows) => {
			return rows.length && rows.length > 0 ? rows : null;
		});
	}

	function updatePerson(id, personName, personAddr, LatCoords, LonCoords){
		const queryString = "UPDATE healthdb.persons SET personName=?, personAddr=?, LatCoords=?, LonCoords=? WHERE id=?";
    	return mySQL.makeQuery(queryString, [personName, personAddr, LatCoords, LonCoords, id], (result) => {
			return result.affectedRows > 0;
		});
	}

	function delPerson(id){
		const queryString = "DELETE FROM healthdb.persons WHERE id=?";
    	return mySQL.makeQuery(queryString, [id], (result) => {
			return result.affectedRows > 0;
		});
	}

	function personsList(){
		const queryString = "SELECT * FROM healthdb.persons";
    	return mySQL.makeQuery(queryString, null, (rows) => {
			return rows.length && rows.length > 0 ? rows : null;
		  });
	}
	
	return {
		checkIfPersonExists,
		addPerson,
		editPerson,
		updatePerson,
		delPerson,
		personsList
	}
	
}