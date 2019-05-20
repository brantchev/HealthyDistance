// Load our app server using express somehow..
const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(morgan('short'));
// app.use(morgan("combined"));

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false}));

function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Health-2019',
        database: 'healthdb'
    });
}

app.post("/user_create", (req, res) => {
    console.log("trying to create a new user");
    console.log("first: " + req.body.firstName + " / last: " + req.body.lastName);

    const queryString = "INSERT INTO healthdb.users (firstName, lastName) VALUES (?,?)";
    getConnection().query(queryString, [req.body.firstName, req.body.lastName], (err, results, fields) =>{
        if (err) {
            console.log(err);
            res.send(err.message);
            //res.sendStatus(500);
            res.end();
            return;
        } else {
            res.send("User with first name: " + req.body.firstName + " and last name: " + req.body.lastName + " was assigned id: " 
                        + results.insertId + ", entered in DB successfully!");
            res.end();
        }
    });
});

app.get('/', (req, res) => {
    console.log("Responding to root route");
    res.send("Hello from ROOOOOT!");
});


app.get('/user/:id',(req, res) => {
    console.log('Fetching user with id: ' + req.params.id);
    const userID = req.params.id;
    const queryString = "SELECT * FROM healthdb.users WHERE id=?";
    getConnection().query(queryString, [userID], (err,rows,fields) => {
        console.log("Trying to fetch data!!!!!!");
        if (err) {
            console.log(err);
            // res.send(err.message);
            res.sendStatus(500);
            res.end();
            return;
        } else {
            const userReturn = rows.map ((row) => {
                return {firstName: row.firstName, lastName: row.lastName};
            });
            res.json(userReturn);
        }
    });
    // res.end();
});


app.get('/users', (req, res) => {
    console.log('Fetching ALL users');
    const queryString = "SELECT * FROM healthdb.users";
    getConnection().query(queryString, (err,rows,fields) => {
        console.log("Trying to fetch ALL data!!!!!!");
        if (err) {
            console.log(err);
            // res.send(err.message);
            res.sendStatus(500);
            res.end();
            return;
        } else {
            res.json(rows);
        }
    });
    // res.end();
});

app.listen(3003, () => {
    console.log("Server is up and listening on port 3003")
});