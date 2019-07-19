// Load our app server using express somehow..
const express = require('express');
const app = express();
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

require('./routes/')(app);

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