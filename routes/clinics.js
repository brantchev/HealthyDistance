//will contain all clinics related routes
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Health-2019',
    database: 'healthdb'
});

function getConnection() {
    return connectionPool;
}

router.post("/add_clinic", (req, res) => {
    const queryString = "INSERT INTO healthdb.clinics (clinicName, clinicAddr, LatCoords, LonCoords) VALUES (?,?,?,?)";
    getConnection().query(queryString, [req.body.clinicName, req.body.clinicAddr, req.body.LatCoords, req.body.LonCoords], (err, results, fields) =>{
        if (err) {
            console.log(err);
            res.send(err.message);
            //res.sendStatus(500);
            res.end();
            return;
        } else {
            res.redirect('/clinics');
        }
    });
});


router.get('/clindel/:id',(req, res) => {
    const clinicID = req.params.id;
    const queryString = "DELETE FROM healthdb.clinics WHERE id=?";
    getConnection().query(queryString, [clinicID], (err,rows,fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            res.end();
            return;
        } else {
            res.redirect('/clinics');
        }
    });
});

router.get("/clinics", (req, res) => {
    console.log(">>>>>>>>>>>>>>>> in clinics")
    const queryString = "SELECT * FROM healthdb.clinics";
    getConnection().query(queryString, (err,rows,fields) => {
          console.log(rows);
          if (err) {
            console.log(err);
            res.sendStatus(500);
            res.end();
            return;
  
          } else {
            res.render('clinics', {clinics: rows});
  
          }
      });  
  });


module.exports = router;