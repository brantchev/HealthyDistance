// Load our app server using express somehow..
const express = require('express');
const app = express();
const userRouter = require('./routes/user.js');
const clinicsRouter = require('./routes/clinics.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('short'));
// app.use(morgan("combined"));
app.use(express.static("./public"));
// app.use(userRouter);
// app.use(clinicsRouter);
require('./routes/')(app);

// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: process.env.DB_host,
//   port: process.env.DB_port,
//   user: process.env.DB_user,
//   password: process.env.DB_password,
//   database: process.env.DB_database
// });

// const connection = require('./lib/mySQLconnection');
const connection = require('./lib/mysqlConnection/MysqlConnection');

app.use("/", (req, res) => {

  if (!req.body.userName){
    res.render('loader');

  } else if (req.body.userName == "-"){
    res.render('login');

    } else {
      const queryString = "SELECT * FROM healthdb.users WHERE userName=? AND passWord=? LIMIT 1";
      connection.makeQuery(queryString, [req.body.userName, req.body.passWord], (rows) => {
        if (rows.length > 0){
          res.render('start');
        } else {
          res.render('login');
        }
    });
  }
});



app.use(/*default redirect when not found*/(req, res) => {
    res.status(404).send("Not found!");
});
app.listen(3003, () => {
    console.log("Server is up and listening on port 3003")
});